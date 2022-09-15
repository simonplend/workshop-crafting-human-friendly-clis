# Crafting Human Friendly CLIs with Node.js Core

## Development

- Ensure you have the
[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
extension installed (settings are in [.editorconfig](.editorconfig)).
- The git pre-commit runs linting with `xo`. It's configured to format code with
Pretier (settings are in [.xo-config.json](.xo-config.json)).
- Install npm packages at the root of this repository so they're available in
all sub-directories.
- The generation of `package-lock.json` has been disabled while we develop the
workshop to avoid messy lockfile merge conflicts. We can generate one once the
workshop materials are complete.

## TODO

- [ ] Generate a `package-lock.json` and remove `.npmrc` once the workshop
materials are complete.
