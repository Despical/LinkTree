import { readFile, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

// Publish the same React content in the initial HTML for crawlers and no-JS visits.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const html = await readFile('dist/index.html', 'utf8')
  const placeholder = '<div id="root"></div>'
  if (!html.includes(placeholder)) throw new Error('Missing prerender root')
  const markup = renderToString(createElement(App))
  await writeFile('dist/index.html', html.replace(placeholder, `<div id="root">${markup}</div>`))
  console.log('Prerendered LinkTree content into dist/index.html')
} finally {
  await server.close()
}
