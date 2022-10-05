---
layout: statement
---

# Parsing --arguments

---
class: text-4xl
---

# Popular libraries

<v-clicks>

- <mdi-box-variant-closed /> [minimist](https://www.npmjs.com/package/minimist)
- <mdi-box-variant-closed /> [commander.js](https://github.com/tj/commander.js#quick-start)
- <mdi-box-variant-closed /> [yargs](https://yargs.js.org/)
- <mdi-box-variant-closed /> [meow](https://www.npmjs.com/package/meow)
- <mdi-box-variant-closed /> [commist](https://www.npmjs.com/package/commist)

</v-clicks>

---
layout: section
---

# Introducing `parseArgs`

<v-clicks>

## High level API for command-line argument parsing

<div class="mt-10 text-2xl">

"...intended for developers of simple CLI tools, ad-hoc scripts,<br>
deployed Node.js applications, and learning materials."

</div>

</v-clicks>

---
layout: two-cols
---

# `parseArgs` contributors

## Created by members of Node.js package maintenance team:

<p class="text-2xl">

- [John Gee](https://github.com/shadowspawn), Maintainer of Commander.js
- [Benjamin Coe](https://github.com/bcoe), Maintainer of yargs

</p>

::right::

<v-click>

<img src="/images/screenshot-parseargs-contributors.png" class="ml-10" alt="Tweet: @ljharb @bakkoting @iansu @darcy @joe_sepi @aaronccasanova @ruyadorno and others were critical to landing the work. @b0neskull got everything started 3+ years ago">

<p class="ml-10">

*([Source](https://twitter.com/BenjaminCoe/status/1532333341151744008))*

</p>

</v-click>

---
layout: two-cols
class: text-2xl leading-loose
---

# Where is `parseArgs`?

<div></div>

<v-click>

Developed under [pkgjs/parseargs](https://github.com/pkgjs/parseargs) on GitHub

</v-click>

<v-click>

Upstreamed into Node.js

</v-click>

::right::

<v-clicks>

## Availability in Node.js

```javascript
import { parseArgs } from "node:util";
```

Since **[v16.17.0](https://nodejs.org/en/blog/release/v16.17.0/)** and **[v18.3.0](https://nodejs.org/en/blog/release/v18.3.0/)**

Stability: Experimental

Also available as an npm package: [@pkgjs/parseargs](https://www.npmjs.com/package/@pkgjs/parseargs)

</v-clicks>

---
layout: statement
---
# parseArgs API

<v-clicks>

## `util.parseArgs([config])`

`config` {Object} Used to provide arguments for parsing and to configure
the parser.

`config` supports the following properties:

</v-clicks>

---

# parseArgs API: `args`

- `args` {string\[]} array of argument strings. **Default:** `process.argv`
	with `execPath` and `filename` removed.

No need to do:

```javascript
process.argv.slice(2)
```

---

# parseArgs API: `options`

- `options` {Object} Used to describe arguments known to the parser.
	Keys of `options` are the long names of options and values are an
	{Object} accepting the following properties:
	- `type` {string} Type of argument, which must be either `boolean` or `string`.
	- `multiple` {boolean} Whether this option can be provided multiple
		times. If `true`, all values will be collected in an array. If
		`false`, values for the option are last-wins. **Default:** `false`.
	- `short` {string} A single character alias for the option.

---

# parseArgs API: Other configuration options

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

---

# parseArgs API: Return value

- Returns: {Object} The parsed command line arguments:
  - `values` {Object} A mapping of parsed option names with their {string}
    or {boolean} values.
  - `positionals` {string\[]} Positional arguments.
  - `tokens` {Object\[] | undefined} See [parseArgs tokens](#parseargs-tokens)
    section. Only returned if `config` includes `tokens: true`.

---
layout: statement
---
# parseArgs: Documentation

[https://nodejs.org/api/util.html#utilparseargsconfig](https://nodejs.org/api/util.html#utilparseargsconfig)

---

# parseArgs in action

```javascript {all|1|4-12|13-15}
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
	strict: false,
	allowPositionals: true,
	tokens: true,
});

console.log(args);
```

<!--
Accepts options object that describes expected arguments.

Returns structured object with parsed options and positionals.
-->

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
layout: statement
class: text-3xl
---

# Recommended reading

<div></div>

[Parsing command line arguments with util.parseArgs()](https://exploringjs.com/nodejs-shell-scripting/ch_node-util-parseargs.html)

from [Shell scripting with Node.js](https://exploringjs.com/nodejs-shell-scripting/toc.html)
by [Dr. Axel Rauschmayer](https://twitter.com/rauschma)
