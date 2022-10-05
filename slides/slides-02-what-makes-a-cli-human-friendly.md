---
theme: seriph
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

- Follow the conventions of the Unix environment
- There are over 40 years of CLI design conventions that we can draw upon
- Following these conventions provides a strong technical foundation
- Makes a CLI intuitive and guessable
- Makes users efficient

</v-clicks>

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

- Why? https://github.com/lirantal/nodejs-cli-apps-best-practices#21-prefer-a-small-dependency-footprint
- Security
- Reduce dependencies
- Segue to what Node.js core offers us for building CLIs
