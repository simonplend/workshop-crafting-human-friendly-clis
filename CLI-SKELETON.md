# cli-skeleton

## Steps to create the CLI skeleton

- [ ] Make this a shell script
- [ ] Change this to work with Node e.g. https://github.com/jsjoeio/create-express-ts/blob/main/bin/cli.js

```bash
mkdir takenote
cd takenote

# Create package.json
npm init --yes

# Configure package.json
## Configure the package so we can write ECMAScript (ES) modules
npm pkg set type="module"
npm pkg set description="Note taking CLI tool"
## Remove unused field
npm pkg delete main
# TODO: Set engines.node - what Node.js version?

# Create CLI entrypoint script with a shebang line
echo -e '#!/usr/bin/env node\n' > cli.js
# Make the entrypoint script executable so it can be run with: ./cli.js
chmod ug+x cli.js

# Configure package bin scripts
npm pkg set bin.takenote="./cli.js"

# Create directory to store CLI code
mkdir src/
```

## Executing the CLI during development

```bash
cd takenote

# Run the CLI entrypoint script directly
./cli.js

# Run the CLI with npx
npx -y --package . takenote

# Run the CLI npx from GitHub
npx username/cli-repo-name
```
