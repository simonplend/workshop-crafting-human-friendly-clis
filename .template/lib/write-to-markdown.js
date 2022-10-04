import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export async function writeToMarkdown({ notes, frontMatter, isPrivate }) {
	if (!notes?.length) {
		throw new Error("No notes to save.");
	}

	const today = new Date();
	const fileName = `${today.getDate()}-${String(today.getMonth()).padStart(
		2,
		"0"
	)}-${today.getUTCFullYear()}.${isPrivate ? "private.md" : "md"}`;

	const filePath = join("notes", fileName);

	try {
		// TODO: Use `appendFile`
		const currentFile = await readFile(filePath);
		const newFile = `${currentFile.toString()}\n${notes.join("\n")}`;
		await writeFile(filePath, newFile);
	} catch (error) {
		if (error.code === "ENOENT") {
			let newFile = "---\n";

			if (Object.keys(frontMatter).length > 0) {
				for (const key in frontMatter) {
					newFile += `${key}: ${frontMatter[key]}\n`;
				}
			}

			newFile += "---\n";
			newFile += notes.join("\n");

			await writeFile(filePath, newFile);
		} else {
			console.error(error);
		}

		return filePath;
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
		frontMatter: { temperature: "27" },
	};

	writeToMarkdown(test);
}
