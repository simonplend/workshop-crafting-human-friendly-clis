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
