# Husky & lint-staged presets

To enable commit-time linting across the monorepo, install Husky and lint-staged in the root project and wire them up as follows:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Add the following snippets to `package.json`:

```json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": "@spp-sekolahala/config/lint-staged.json"
}
```

Create `.husky/pre-commit` with:

```bash
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```
```
