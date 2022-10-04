# Exercise 01: Parsing arguments

**Goal: Add argument parsing that supports the following scenarios:**

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

<!-- TODO: Explain where to implement the code a takenote/lib/01-parsing-arguments.js -->

<details>
  <summary><strong>Exercise hints (try without them to start with)</strong></summary>

- Every argument provided in the options to `parseArgs()` must have a type.
- The `multiple` property allows us to control whether an option can be provided
  multiple times.
- We can specify a single character alias for an option by setting a `short` property.
</details>

<details>
  <summary><strong>Solution</strong></summary>

You can view a potential solution in
[01-parsing-arguments.solution.js](./01-parsing-arguments.solution.js).

</details>
