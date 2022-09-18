# Exercise: Parsing arguments

# CLI project spec

- Note taking CLI tool
- Generate daily notes as Markdown files
- Create a GitHub Action for building with Eleventy + publishing with GitHub pages
- Show inspirational historical event or facts from API (optional)
- Add weather into the note entry (optional)

## Instructions

TODO

Implement in 03-parsing-arguments/exercise-poc/src/parse-arguments.js

## Requirements

- Support short arguments
- Add argument parsing that supports the following scenarios:

  ```bash
  takenote --note "Today I did a lot of coding"
  ```

  ```bash
  takenote --note "Today I did a lot of coding" --private
  ```

  ```bash
  takenote --note "Today I did a lot of coding" \
    --note "I also made dinner"
  ```

  ```bash
  takenote -n "Today I did a lot of coding" \
    -n "I also made dinner"
  ```

  ```bash
  takenote -n "Today I did a lot of coding" -p
  ```

## Hints

TODO

## Solution

TODO

TODO: Write tests
