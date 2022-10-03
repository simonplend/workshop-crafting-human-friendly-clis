---
theme: default
---

# What makes a CLI human friendly?

---

# CLI = Command-line interface

<!-- TODO: Screenshot of terminal with a command line -->

---

# Following patterns that already exist

# Designing for humans first

---
layout: cover
---

# Following patterns that already exist

---

- Follow the conventions of the Unix environment
- There are over 40 years of CLI design conventions that we can draw upon
- Following these conventions provides a strong technical foundation
- Makes a CLI intuitive and guessable
- Makes users efficient

---

# Use POSIX-compliant command line argument syntax

<!-- TODO: Example -->

---

# Standard in/out/err

<!-- TODO: Example -->

---

# Use POSIX signals — SIGINT, TODO

<!-- TODO: Example -->

---


# Exit codes — zero and non-zero

<!-- TODO: Example -->

---

# Piping plain text or JSON between commands

<!-- TODO: Example -->

JSON LD (? multi-line)

---
layout: cover
---

# Designing for humans first

---

# Make functionality discoverable

<!-- TODO: Example -->

---

# Prefer options over positional arguments

Explicit vs implicit

<!-- TODO: Example -->

---

# Provide help texts

<!-- TODO: Example -->

---

# Provide lots of examples

<!-- TODO: Example e.g. in the help texts, include links to online documentation -->

---

# Provide contextual help and guidance

- Suggest command to run next
- Suggest what to do when there’s an error

<!-- TODO: Example -->


---

# Output just enough information

...to tell the user what they need to know.

A wall of text is overwhelming.

No information about what's happening can be frustrating.

<!-- TODO: Example -->

---

# Keep the CLI footprint small

- TODO: Why? https://github.com/lirantal/nodejs-cli-apps-best-practices#21-prefer-a-small-dependency-footprint
- Security
- Reduce dependencies
- Segue to what Node.js core offers us for building CLIs

---

- In the context of… ?
	- Interactive input
	- Handling network errors (fetch)

<!-- TODO: Anything else to include? -->
