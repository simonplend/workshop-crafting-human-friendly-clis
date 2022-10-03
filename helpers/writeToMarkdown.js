import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export async function writeToMarkdown({ notes, isPrivate, headings }) {
  const today = new Date();
  const fileName = `${today.getDate()}-${String(today.getMonth()).padStart(
    2,
    "0"
  )}-${today.getUTCFullYear()}.${isPrivate ? "private" : "md"}`;

  const path = join("..", "notes", fileName);

  try {
    const currentFile = await readFile(path);
    const newFile = `${currentFile.toString()}\n${notes.join("\n")}`;
    await writeFile(path, newFile);
  } catch (error) {
    if (error.code === "ENOENT") {
      let newFile = "---\n";
      for (const key in headings) {
        newFile += `${key}: ${headings[key]}\n`;
      }

      newFile += "---\n";
      newFile += notes.join("\n");
      await writeFile(path, newFile);
    } else {
      console.log(error);
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
