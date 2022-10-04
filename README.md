# $ Crafting Human Friendly CLIs with Node.js Core █

_A workshop by [Simon Plenderleith](https://twitter.com/simonplend) &
[Kevin Cunningham](https://twitter.com/dolearning/)._

## Getting ready for the workshop

### 1. Required software

You'll need to have this software installed:

- Node.js >= v18.7.0 ([how to install](https://nodejs.dev/en/learn/how-to-install-nodejs/))
- npm >= v8

Check that you have the software versions installed that you need for this workshop
by running these commands in your terminal:

```sh
# Check Node.js version.
node --version

# Check npm version.
npm --version
```

### 2. Clone this repository with Git

You'll need to have this repository cloned so you can work on the coding
exercises during the workshop:

```sh
git clone https://github.com/simonplend/workshop-crafting-human-friendly-clis.git
```

> If you want to commit and push your work to your own repository on GitHub,
> you can [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo),
> then clone your fork rather than this repository directly.
> If you do create a fork, you'll want to
> [sync it](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)
> with this repository at the start of the workshop.

### 3. Open your editor and terminal

There are coding exercises throughout this workshop. To make sure you're ready:

- Open this project in your code editor.
- Open a terminal window for running commands, and `cd` to the directory for
  this project.

You're now ready to get started! 🚀

## Workshop exercises

We're going to build a CLI tool with APIs that are available in Node.js core.
This tool will allow us to input notes and store them as daily notes in Markdown
files.

### Create a skeleton CLI

You can generate a skeleton CLI by running the [create-cli](./create-cli)
shell script in your terminal:

```bash
npm run create-cli
```

### Run your CLI

```bash
npx takenote
```

### 👉 Start the first exercise: [01 - Parsing arguments](./exercises/01-parsing-arguments.md)
