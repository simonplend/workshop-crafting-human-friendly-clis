#!/usr/bin/env bash

set -xe pipefail

mkdir takenote
cd takenote

# Create package.json
npm init --yes

# Configure package.json

# -- Configure the package so we can write ECMAScript (ES) modules
npm pkg set type="module"

npm pkg set description="Note taking CLI tool"

# -- Remove unused field
npm pkg delete main

# TODO: Set engines.node - what Node.js version?

# Create CLI entrypoint script with a shebang line
# TODO: Change this to copy in skeleton scripts
echo -e '#!/usr/bin/env node\n' > cli.js

# Make the entrypoint script executable so it can be run with: ./cli.js
chmod ug+x cli.js

# Configure package bin scripts
npm pkg set bin.takenote="./cli.js"

# Create directory to store CLI code
mkdir src/
