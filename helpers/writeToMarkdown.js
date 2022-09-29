import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export async function writeToMarkdown({ notes, isPrivate, headings }) {
  const today = new Date();
  let fileName = `${today.getDate()}-${String(today.getMonth()).padStart(
    2,
    "0"
  )}-${today.getUTCFullYear()}.${isPrivate ? "private" : "md"}`;

  let path = join("..", "notes", fileName);

  try {
    const currentFile = await readFile(path);
    const newFile = `${currentFile.toString()}\n${notes.join("\n")}`;
    await writeFile(path, newFile);
  } catch (err) {
    if (err.code === "ENOENT") {
      let newFile = "---\n";
      for (let key in headings) {
        newFile += `${key}: ${headings[key]}\n`;
      }
      newFile += "---\n";
      newFile += notes.join("\n");
      await writeFile(path, newFile);
    } else {
      console.log(err);
    }
  }
}

const self = fileURLToPath(import.meta.url);

if (process.argv[1] === self) {
  const test = {
    notes: [
      "This is an",
      "array of comma seperated",
      "values that each represent a note",
    ],
    isPrivate: false,
    headings: { temperature: "27" },
  };

  writeToMarkdown(test);
}
