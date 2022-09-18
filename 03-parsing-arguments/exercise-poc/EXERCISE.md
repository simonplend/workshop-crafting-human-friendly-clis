# Exercise: Parsing arguments

## Requirements

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
