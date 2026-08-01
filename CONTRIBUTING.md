# Contributing

When contributing to this repository, please first discuss the change you wish to make through a [GitHub issue](https://github.com/Despical/LinkTree/issues/new) with the repository owner before starting substantial work.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions with the project.

## Development Setup

LinkTree requires Node.js 22 or newer and npm 10 or newer.

```bash
npm ci
npm run dev
```

All profile text, destinations, sections, subtitles, and icons are configured in `src/config/links.ts`.

## Pull Request Process

If you want to help and do not know where to start, check the [currently open issues](https://github.com/Despical/LinkTree/issues) before creating a pull request.

* Use spaces for indentation. Do not use tabs.
* Respect the existing TypeScript, React, and CSS style.
* Keep content changes in `src/config/links.ts` when no component change is required.
* Keep diffs focused. Do not reformat or reorganize unrelated files.
* Do not change package versions or generated assets unless they are part of the proposed change.
* Run `npm run lint` and `npm run build` successfully before submitting.

## Issue Process

Use the provided issue form and include enough detail to reproduce or evaluate the request.

* Check that the issue is not a duplicate.
* Use issues for bugs and project improvements, not private security reports.
* Test against the latest version of the site before reporting a problem.
* Include the browser, device or screen size, and deployment environment when relevant.
* Keep separate problems in separate issues so each one can be tracked clearly.

Security vulnerabilities must be reported privately according to [SECURITY.md](SECURITY.md).

## Additional Resources

* [General GitHub documentation](https://docs.github.com/)
* [GitHub pull request documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
