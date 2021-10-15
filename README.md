# Eslint and Prettier Setup for Vue2

This package provides my Eslint and Prettier config.

## Usage

### 1. Install package
- npm

```bash=
npx install-peerdeps --dev @jenniesh/eslint-config-vue
```

- yarn 
```bash=
npx install-peerdeps --dev @jenniesh/eslint-config-vue -Y
```
Make sure that the dependencies of your configuration package may also be installed.


### 2. Add `"@jenniesh/eslint-config-vue"` to `extends` in your `.eslintrc`

```json=
// .eslintrc.js

{
  "extends": [ "@jenniesh/eslint-config-vue" ]
}
```


## VS Code Settings

### 1. Install the [Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 2. Add `settings.json` file in `.vscode` folder

```json=
// settings.json

{
    // These are all my auto-save configs
    "editor.formatOnSave": true,
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
    "editor.formatOnSave": false
    },
    "[javascriptreact]": {
    "editor.formatOnSave": false
    },
    // show eslint icon at bottom toolbar
    "eslint.alwaysShowStatus": true,
    // tell the ESLint plugin to run on save
    "editor.codeActionsOnSave": {
    "source.fixAll": true
    }
}
```

### 3. Restart VS Code