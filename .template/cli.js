#!/usr/bin/env node

import { parseArguments } from "./lib/01-parsing-arguments.js";
import { gatherNotesInteractively } from "./lib/02-interactive-input.js";
import { fetchFrontMatter } from "./lib/03-fetching-data.js";

import { writeToMarkdown } from "./lib/write-to-markdown.js";

try {
	const parsedArgs = parseArguments();

	/**
	 * Remove these next two lines once you've completed Exercise 01.
	 */
	console.dir({ parsedArgs }, { depth: null });
	throw new Error(
		"Follow Exercise 01: Parsing arguments (exercises/01-parsing-arguments.md)"
	);

	let { note: notes, private: isPrivate } = parsedArgs.values;

	const hasNotes = notes?.length > 0;
	if (!hasNotes) {
		({ notes, isPrivate } = await gatherNotesInteractively());
	}

	/**
	 * Remove these next two lines once you've completed Exercise 02.
	 */
	console.log({ notes, isPrivate });
	throw new Error(
		"Follow Exercise 02: Interactive input (exercises/02-interactive-input.md)"
	);

	const frontMatter = await fetchFrontMatter();

	/**
	 * Remove these next two lines once you've completed Exercise 03.
	 */
	console.log({ frontMatter });
	throw new Error("Follow Exercise 03: Fetching data (03-fetching-data.md)");

	const notesFilePath = await writeToMarkdown({
		notes,
		frontMatter,
		isPrivate,
	});

	console.log(`File written to ${notesFilePath}`);
} catch (error) {
	console.error(error);
}
