# Invenio ESLint config

This is the ESLint config used by the Invenio team.

## Installation

```shell
npm install --save-dev eslint-config-invenio
# if you use prettier
npm install --save-dev prettier eslint-plugin-prettier
# if you use babel
npm install --save-dev eslint-plugin-babel babel-eslint
```

## Presets

### invenio

The base config. You always want this when using this package.
Requires `eslint-plugin-import`

### invenio/prettier

Enables prettier integration.
Requires `prettier`, `eslint-config-prettier` and `eslint-plugin-prettier`
Make sure to load this after all other `invenio/*` presets.

For convenience, we also include a prettier config, that can be loaded by putting `"eslint-config-invenio/prettier-config"` in your `.prettierrc`.

## Example `.eslintrc.yml`

```yaml
extends:
  - '@inveniosoftware/invenio'
  - '@inveniosoftware/invenio/prettier'

parser: '@babel/eslint-parser'
```

## Example `.prettierrc`

```toml
"@inveniosoftware/eslint-config-invenio/prettier-config"
```

## Development

1. Clone the repository:

    ```shell
    git clone https://github.com/inveniosoftware/eslint-config-invenio.git
    cd eslint-config-invenio
    npm install
    ```

2. In the consuming package, link the package:

    ```shell
    ./run-js-linter.sh -i
    npx link ~/path/to/eslint-config-invenio
    ./run-js-linter.sh
    ```

3. to unlink the package:

    ```shell
    ./run-js-linter.sh -i
    ./run-js-linter.sh
    ```
