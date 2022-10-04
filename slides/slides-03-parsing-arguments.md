---
theme: seriph
layout: cover
---

# Parsing arguments

---

## layout: cover

# Terminology

<!-- TODO: This is NOT the terminology we or Node.js are using -->

- Command-line interfaces can be designed to accept parameters
- Two types of parameters:
  - Arguments (or args) — positional parameters
  - Flags — named parameters, can also include a value

<!-- TODO: Examples -->

---

## layout: cover

# Commonly used libraries

- [minimist](https://www.npmjs.com/package/minimist)
- [commander.js](https://www.npmjs.com/package/commander)
- [yargs](https://yargs.js.org/)
- [meow](https://www.npmjs.com/package/meow)
- [commist](https://www.npmjs.com/package/commist) (to be used with `minimist`)
- Honourable mention to [optimist](https://www.npmjs.com/package/optimist)
  - Built on top of `minimist`
  - Deprecated
  - 3.2M weekly downloads on npm :upside-down-smile: <!-- TODO -->

---

# Introducing parseArgs

High level API for command-line argument parsing

> ...is intended for developers of simple CLI tools, ad-hoc scripts,
> deployed Node.js applications, and learning materials.

Created by members of Node.js package maintenance team:

- [John Gee](https://github.com/shadowspawn), Maintainer of Commander.js
- [Benjamin Coe](https://github.com/bcoe), Maintainer of yargs

<!-- TODO: Include screenshot of https://twitter.com/BenjaminCoe/status/1532333341151744008 -->

Developed under [pkgjs/parseargs](https://www.npmjs.com/package/@pkgjs/parseargs) on GitHub and upstreamed into Node.js.

Available in Node.js since **[v16.17.0](https://nodejs.org/en/blog/release/v16.17.0/)** and **[v18.3.0](https://nodejs.org/en/blog/release/v18.3.0/)** (Stability: Experimental)

Also available as an npm package: [@pkgjs/parseargs](https://www.npmjs.com/package/@pkgjs/parseargs)

---

# Using parseArgs

Accepts options object that describes expected arguments.

Returns structured object with parsed options and positionals.

Lives under the Utilities (`util`) module in Node.js core.

```javascript
import { parseArgs } from "node:util";
```

---

# parseArgs in action

<!-- TODO: Prepare this as an example to run live? -->

```javascript
import { parseArgs } from "node:util";

const args = parseArgs({
	options: {
		name: {
			type: "string",
		},
		verbose: {
			type: "boolean",
			short: "v",
		},
	},
	allowPositionals: true,
});

console.log(args);
```

---

# parseArgs API

<!-- TODO: Strip this down -->

## `util.parseArgs([config])`

- `config` {Object} Used to provide arguments for parsing and to configure
  the parser. `config` supports the following properties:

  - `args` {string\[]} array of argument strings. **Default:** `process.argv`
    with `execPath` and `filename` removed.
  - `options` {Object} Used to describe arguments known to the parser.
    Keys of `options` are the long names of options and values are an
    {Object} accepting the following properties:
    - `type` {string} Type of argument, which must be either `boolean` or `string`.
    - `multiple` {boolean} Whether this option can be provided multiple
      times. If `true`, all values will be collected in an array. If
      `false`, values for the option are last-wins. **Default:** `false`.
    - `short` {string} A single character alias for the option.
  - `strict` {boolean} Should an error be thrown when unknown arguments
    are encountered, or when arguments are passed that do not match the
    `type` configured in `options`.
    **Default:** `true`.
  - `allowPositionals` {boolean} Whether this command accepts positional
    arguments.
    **Default:** `false` if `strict` is `true`, otherwise `true`.
  - `tokens` {boolean} Return the parsed tokens. This is useful for extending
    the built-in behavior, from adding additional checks through to reprocessing
    the tokens in different ways.
    **Default:** `false`.

- Returns: {Object} The parsed command line arguments:
  - `values` {Object} A mapping of parsed option names with their {string}
    or {boolean} values.
  - `positionals` {string\[]} Positional arguments.
  - `tokens` {Object\[] | undefined} See [parseArgs tokens](#parseargs-tokens)
    section. Only returned if `config` includes `tokens: true`.

_Source: [Node.js documentation for parseArgs](https://nodejs.org/api/util.html#utilparseargsconfig)_

---

# Coming soon: Defaults

Contributed by [Manuel Spigolon](https://github.com/Eomm).

```javascript
const args = [];

const options = {
	a: {
		type: "string",
		default: "HELLO",
	},
};

const result = parseArgs({ args, options });

// { values: { a: 'HELLO' } }
```

## Pull requests

- `pkgjs/parseargs`: [feat: add default option parameter](https://github.com/pkgjs/parseargs/pull/142)
- `nodejs/node`: [util: add default value option to parsearg](https://github.com/nodejs/node/pull/44631)

---

# Recommended reading

[Parsing command line arguments with util.parseArgs()](https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html)
from [Shell scripting with Node.js](https://exploringjs.com/nodejs-shell-scripting/toc.html)
by [Dr. Axel Rauschmayer](https://twitter.com/rauschma)
