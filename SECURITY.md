# Security Policy

Security reports are taken seriously. If you find a vulnerability in LinkTree,
please report it privately instead of opening a public issue.

## Reporting a Vulnerability

Please send security reports to:

```text
contact@despical.dev
```

When possible, include the following details:

* A clear description of the vulnerability.
* Steps to reproduce the issue.
* The affected commit, branch, deployment URL, browser, or device.
* Any relevant logs, screenshots, request examples, or proof of concept details.
* The expected impact on visitors, linked destinations, deployment credentials, or repository workflows.

Please do not include destructive payloads, real user data, private credentials,
or anything that could damage a running deployment.

## Scope

The following areas are considered security-sensitive:

* Cross-site scripting or unsafe rendering of profile and link content.
* Malicious, misleading, or unexpectedly redirected external links.
* Dependency and frontend supply-chain vulnerabilities.
* GitHub Actions permissions, artifacts, and deployment workflows.
* Exposure of repository secrets, analytics data, or deployment credentials.
* Security problems caused by static assets or third-party resources loaded by the site.

Reports about broken links, visual defects, browser compatibility, content changes,
spam, or other non-security bugs should use the normal GitHub issue tracker.

## Supported Versions

Only the latest public deployment and the current `main` branch are supported.
Please verify the issue against the latest version before reporting when possible.

## Response

After a valid report is received, it will be reviewed as soon as possible. If
the report is confirmed, a fix will be prepared privately and released with
credit where appropriate.

Please avoid public disclosure until a fix is available.
