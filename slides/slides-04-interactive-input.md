# Interactive Input

Asking and posing questions is an important part of crafting CLIs. 

---

With Node code, we've had a callback based API for a while.


```js
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

console.log("I'm here too")
```

---

readline/promises allows us to write code in a more intuitive way.



```js
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question("What have you enjoyed most about NodeConf?");

console.log(`${answer}! I loved that too!`);

rl.close(); 
```

---

Recursive

---

We can use abort controller.

```js
const ac = new AbortController();
const signal = ac.signal;

rl.question('What is your favorite food? ', { signal }, (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});

signal.addEventListener('abort', () => {
  console.log('The food question timed out');
}, { once: true });

setTimeout(() => ac.abort(), 10000);
```