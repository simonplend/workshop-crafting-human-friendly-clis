# Exercise: Interactive Input

# CLI Project Spec

## Instructions

TODO

Implement in 03-parsing-arguments/exercise/src/interactive-output.js

## Requirements

- If the tool is run without arguments, it should be in interactive input mode.
- Greet the user
- Prompt for a note
- For each new line, continue to prompt for a note
- If the user returns an empty line, confirm that they are finished
	- If not keep collecting notes
	- If they are prompt to ask if they'd like these notes to be private
- Return an object with the following shape:
```js
{
	notes: ["An array", "of comma separated", "notes"],
	isPrivate: true // or false
}
```
## Hints

TODO

## Solution

TODO

TODO: Write tests