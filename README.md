Check External Dependencies
===========================

Create a list of dependencies, their versions and licenses.

# Workflow

* Read package.json relative to the repository root
* Get the dependencies and devDependencies
* Create a list of the name of the dependencies and their version
* Lookup the dependency in the NPM registry, and att the license property to each dependency
* Set `external-dependencies` to action output for consumption in other GitHub actions

# Usage

Add workflow to GitHub Actions:

```yml
on:
  pull_request:
    types: [opened, edited, synchronize]
    branches:
      - develop

jobs:
  check_external_dependencies:
    runs-on: ubuntu-latest
    name: Check external dependencies
    steps:
      - name: Checkout
        uses: actions/checkout@v6
      - name: Setup Node
        uses: actions/setup-node@249970729cb0ef3589644e2896645e5dc5ba9c38 # v6
        with:
          node-version: '22.23.4'
          package-manager-cache: false
      - name: Check external dependencies
        uses: surikaterna/check-external-dependencies@main
        with:
          internal-dependency-pattern: 'surikat'
```

# Runtime security and compatibility

For CVE-2026-111497, this composite action installs **Node.js 22.23.4** with
commit-pinned `actions/setup-node` and runs the existing `lib/index.js` bundle.
Inputs, defaults, secrets and the `external-dependencies` output are preserved;
HTTP decompression remains enabled. No application code or dependencies changed,
so the checked-in bundle does not need rebuilding.

Use GitHub Actions runner **2.338.1 or newer with patched embedded Node.js**:
[runner 2.338.1](https://github.com/actions/runner/releases/tag/v2.338.1)
[ships Node.js 24.22.1](https://github.com/actions/runner/blob/v2.338.1/src/Misc/externals.sh)
for the setup-node bootstrap. `runs.using: node24` alone does not select a patch.
Linux, macOS and Windows remain supported where Node.js 22 and Bash are available
(Windows uses Git Bash); no Docker action or Linux-only requirement was added.
The setup step adds Node.js 22.23.4 to the job's **PATH for subsequent steps**.
If another runtime is needed afterwards, explicitly run setup-node again.

After merging, use a commit/tag containing this fix; existing release tags do not
change. The example uses `main`; production workflows should pin the fixed commit.
Direct development requires `^22.23.4 || ^24.22.1 || >=26.12.1`. Update self-hosted
runners and rerun workflows to activate the fix; no deployment was performed.
See the [Node.js security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases).

Targeted Linux smoke: the unchanged bundle ran through the manifest's Bash command
on Node.js 22.23.4 against a local Brotli-encoded HTTP fixture; license lookup,
input filtering and output mapping passed. Hosted Actions and Windows/macOS were
not exercised; no exploit payloads or full application suite were run.
