# LinkTree

[![CI](https://github.com/Despical/LinkTree/actions/workflows/build.yaml/badge.svg)](https://github.com/Despical/LinkTree/actions/workflows/build.yaml)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

LinkTree is my personal link hub. It brings my projects, developer profiles, community links, support pages, documentation, and other useful destinations together in one clean place.

---

## Requirements

* Node.js 22 or newer
* npm 10 or newer

---

## Building From Source

### 1. Clone the Repository

```bash
git clone https://github.com/Despical/LinkTree.git
cd LinkTree
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Run Locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### 4. Validate and Build

```bash
npm run lint
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Customization

Edit `src/config/links.ts` to update the profile, quick links, link sections, descriptions, icons, and destinations.

Static assets such as favicons and custom service icons live in `public/`. Global styling is defined in `src/styles.css`.

---

## Security

Please do not open public issues for security vulnerabilities.

Read [SECURITY.md](SECURITY.md) for responsible disclosure instructions.

---

## Contributing

Contributions are welcome. Before opening a pull request, please read the [Contribution Guidelines](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

This project is licensed under the [GPL-3.0 License](http://www.gnu.org/licenses/gpl-3.0.html).

See the [LICENSE](LICENSE) file for comprehensive copyright notices and third-party attributions.