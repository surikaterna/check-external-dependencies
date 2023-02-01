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
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Check external dependencies
        uses: surikaterna/check-external-dependencies@v1.0.0
        with:
          internal-dependency-pattern: 'surikat'
```
