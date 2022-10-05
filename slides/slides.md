---
theme: seriph
layout: cover
background: >-
  https://images.unsplash.com/photo-1655210909799-0568a592d4f8?ixlib=rb-1.2.1&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb
title: Crafting Human Friendly CLIs with Node.js Core
lineNumbers: true
---

# $ Crafting Human Friendly CLIs with Node.js Core █

<div class="uppercase text-sm tracking-widest">
Simon Plenderleith & Kevin Cunningham
</div>

<div class="text-4xl mt-8 tracking-widest">
	<a href="https://bit.ly/node-conf-cli">https://bit.ly/node-conf-cli</a>
</div>

<div class="abs-bl mx-14 my-12 flex opacity-40">
  <a href="https://unsplash.com/photos/F6iukRSCxaA">Photo: Daniel Dan</a>
</div>

---
layout: intro
---

# Simon Plenderleith

<div class="text-xl opacity-80">

<v-clicks>

Independent **Node.js consultant and educator**

**I help developers level up** with Node.js at [simonplend.com/blog](https://simonplend.com/blog)

</v-clicks>

<div class="block mt-6" v-click>

<img src="https://expressapivalidation.com/images/cover.png" class="float-left h-30 mr-4">

Author of **Express API Validation Essentials**<br>
[expressapivalidation.com](https://expressapivalidation.com)

</div>

</div>

<div v-click class="mt-30 my-10 grid grid-cols-[35px,1fr] w-min gap-y-4">
  <ri-twitter-line class="opacity-80 text-blue-400"/>
  <div><a href="https://twitter.com/simonplend" target="_blank">@simonplend</a></div>
  <ri-github-line class="opacity-60"/>
  <div><a href="https://github.com/simonplend" target="_blank">simonplend</a></div>
  <ri-user-3-line class="opacity-80 text-yellow-500"/>
  <div><a href="https://simonplend.com" target="_blank">simonplend.com</a></div>
</div>

---

# Kevin Cunningham

<div class="text-xl opacity-80">

<v-clicks>

**Lifetime learner and educator**, working with individuals and<br> teams to level up their development skills. egghead instructor.

</v-clicks>

<div class="block mt-6" v-click>

egghead course: [Get Started Building CLI Tools with Node.js](https://egghead.io/courses/get-started-building-cli-tools-with-node-js-2af0caec)

</div>

</div>

<div v-click class="mt-30 my-10 grid grid-cols-[35px,1fr] w-min gap-y-4">
  <ri-twitter-line class="opacity-80 text-blue-400"/>
  <div><a href="https://twitter.com/dolearning" target="_blank">@dolearning</a></div>
  <ri-github-line class="opacity-60"/>
  <div><a href="https://github.com/doingandlearning" target="_blank">doingandlearning</a></div>
  <ri-user-3-line class="opacity-80 text-yellow-500"/>
  <div><a href="https://kevincunningham.co.uk/" target="_blank">kevincunningham.co.uk</a></div>
</div>

---

# Workshop outline

<div class="text-3xl opacity-80">

- What makes a CLI human friendly?
- Parsing arguments
- Interactive Input
- Fetching data

</div>

---
layout: statement
---

# What makes a CLI human friendly?

---

# Following patterns that already exist

# Designing for humans first

---
## layout: cover
---
# Following patterns that already exist

<v-clicks>

- Use POSIX-compliant command line argument syntax
- Standard in/out/err
- Use POSIX signals — SIGINT, TODO
- Exit codes — zero and non-zero
- Piping plain text or JSON between commands

</v-clicks>

<!-- - Follow the conventions of the Unix environment
- There are over 40 years of CLI design conventions that we can draw upon
- Following these conventions provides a strong technical foundation
- Makes a CLI intuitive and guessable
- Makes users efficient -->




---
## layout: cover
---

# Designing for humans first

---
layout: image-right
image: getting-started.png
---

# Make functionality discoverable



---

# Prefer options over positional arguments

<div></div>
Explicit vs implicit

<!-- TODO: Example -->

---
layout: image-right
image: git-help.png
---

# Provide help texts

- Display the more common flags first
- Format and group the help in a way which supports users


---

# Provide lots of examples

- Have a few great examples in documentation
- Don't overwhelm though - have extra cheatsheets if you have loads


---
layout: image-right
image: git.png
---
# Provide contextual help and guidance

- Suggest command to run next
- Suggest what to do when there’s an error



---

# Output just enough information

...to tell the user what they need to know.

A wall of text is overwhelming.

No information about what's happening can be frustrating.

<!-- TODO: Example -->

---

# Keep the CLI footprint small

- Security
- Reduce dependencies
- Segue to what Node.js core offers us for building CLIs

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

---
layout: cover
---

# Interactive Input

Asking and posing questions is an important part of crafting CLIs.

---

With Node code, we've had a callback based API for a while.

```js {all|1|2|4|6-11|10|13|all}
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

rl.question("What do you think of Node.js? ", (answer) => {
	// TODO: Log the answer in a database
	console.log(`Thank you for your valuable feedback: ${answer}`);

	rl.close();
});

console.log("I'm here too");
```

---

readline/promises allows us to write code in a more intuitive way.

It was added in v17.0.0 and is marked as experimental.

```js {all|1|2-4|6|6-8|10}
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question("What have you enjoyed most about NodeConf?");

console.log(`${answer}! I loved that too!`);

rl.close();
```

---

# We can use abort controller.

```js {all|1-2|4-6|8-14|16|all}
const ac = new AbortController();
const signal = ac.signal;

rl.question("What is your favorite food? ", { signal }, (answer) => {
	console.log(`Oh, so your favorite food is ${answer}`);
});

signal.addEventListener(
	"abort",
	() => {
		console.log("The food question timed out");
	},
	{ once: true }
);

setTimeout(() => ac.abort(), 10000);
```

---

# Limitations

There are other libraries that you might have used for this in the past.

- inquirer allows for built in validation and questions of different types (list, checkbox, password)

```js {all|3|4|6-11|14-15}
import inquirer from "inquirer";

const answers = await inquirer.prompt([
    { type: "input", name: "name", message: "What is your name?" },
    { type: "input", name: "live", message: "Where do you live?" },
    {
      type: "list",
      name: "live2",
      message: "Where do you live?",
      choices: ["NI", "Wales", "Scotland", "England", "Elsewhere"],
    },
  ]);

console.log(`Your name is ${answers.name}.`);
console.log(`You live in ${answers.live} which is in ${answers.live2}`);
```

---
layout: cover
---

# Fetching data
Reaching out to other APIs
---

# Browser compatible implementation

https://nodejs.dev/en/api/v18/globals/#fetch

A browser-compatible implementation of the `fetch()` method was introduced in v17.5.0.

It is labelled as an experimental API.

You don't need to import `fetch` as it's available as a global.

---

When used in a script, you'll get a warning:

```bash
(node:77768) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
```

You can stop using this experimental API by using `--no-experimental-fetch`, alternatively the error can be suppressed with `--no-warnings`.

---

The MDN docs for the fetch method [can be found here](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

It's likely you're familar with this syntax but let's look at some examples.

---

# fetch and parse



```js {all|2|3-5|6|7}
try {
	const response = await fetch("https://swapi.dev/api/planets");
	if (!response.ok) {
		throw new Error("Problem fetching the resource.");
	}
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.log(error);
}
```

---

# With a different http verb

```js {all|2-4|5-9|all}
try {
	const response = await fetch("https://swapi.dev/api/planets", {
		method: "POST",
	});
	if (!response.ok) {
		throw new Error("Problem fetching the resource.");
	}
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.log(error);
}
```

---

# With API key

```js {all|5-8}
const token = "GOT MY TOKEN FROM SOMEWHERE";

try {
	const response = await fetch("https://swapi.dev/api/planets", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) {
		throw new Error("Problem fetching the resource.");
	}
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.log(error);
}
```

---
theme: seriph
layout: cover
---

# Wrapping up

---

# Other CLI topics to explore

You’ll need third-party libraries for some of these tasks.

- Handling standard input (stdin)
- Process output (stderr/stdout)
- Generating help
- Showing progress → user feedback
- Testing
- Configuration files
- Accessibility

---

# Awesome CLI resources

- [Command Line Interface Guidelines](https://clig.dev/)
- [Node.js CLI Apps Best Practices](https://github.com/lirantal/nodejs-cli-apps-best-practices)
- [Design guidelines for GitHub's command line tool](https://primer.style/cli/)
- Twitter thread: [11 UX patterns for delightful CLI applications](https://twitter.com/thewizardlucas/status/1534852315567497218)
- Twitter thread: [6 of my favorite third-party libraries when building CLI applications using Node.js](https://twitter.com/loige/status/1570328926488088577)

---

# Thank you to...

The people whose fantastic work helped paved the way for this workshop.

- CLIG authors
- parseargs contributors
- readline/promises contributors
- Undici contributors
- Node.js collaborators
- Liran Tal
- Lucas Costa
- Luciano Mammino

---
layout: image-right
image: feedback-qr.png
---
# Thank YOU!

Thanks for joining us today.

If you could take a few minutes to give us some feedback it would be super helpful!

https://tally.so/r/nWO4gv

## Find us online

### Simon

- [@simonplend](https://twitter.com/simonplend)
- [simonplend.com](https://simonplend.com/)

### Kevin

- [@dolearning](https://twitter.com/dolearning/)
- [kevincunningham.co.uk](https://kevincunningham.co.uk/)
