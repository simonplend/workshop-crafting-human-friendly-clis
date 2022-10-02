# Build a CLI tool with Node.js core

Through these exercises you're going to build a CLI tool with APIs that are
available in Node.js core. This tool will accept daily notes and save them as
Markdown files.

## Start here

Generate a CLI skeleton by running [create-skeleton-cli.sh](./create-skeleton-cli.sh)
in your terminal:

```bash
./create-skeleton-cli.sh
```

<!-- TODO: Explain what the script has created for you -->

<!-- TODO: NTH - Rewrite this with Node e.g. https://github.com/jsjoeio/create-express-ts/blob/main/bin/cli.js -->

## Running your CLI

<!-- TODO: Simplify this -->

```bash
cd takenote

# Run the CLI entrypoint script directly
./cli.js

# Run the CLI with npx
npx -y --package . takenote

# Run the CLI npx from GitHub
npx username/cli-repo-name
```

## Exercises

- [03 - Parsing arguments](./03-parsing-arguments/README.md)
- [04 - Interactive input](./04-interactive-input/README.md)
- [05 - Fetching data](./05-fetching-data/README.md)
