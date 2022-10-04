#!/usr/bin/env node

import { parseArguments } from "./lib/01-parsing-arguments.js";
import { gatherNotesInteractively } from "./lib/02-interactive-input.js";
import { fetchFrontMatter } from "./lib/03-fetching-data.js";

import { writeToMarkdown } from "./lib/write-to-markdown.js";

try {
	const parsedArgs = parseArguments();

	// TODO: Remove debug
	console.dir({ parsedArgs }, { depth: null });

	// TODO: Refactor this

	let options = parsedArgs.values;
	let notes = options?.note;

	// TODO: Fix implicit requirement on what's returned by `parseArguments()`
	const hasNotes = notes?.length > 0;
	if (!hasNotes) {
		options = await gatherNotesInteractively();
	}

	const frontMatter = await fetchFrontMatter();

	await writeToMarkdown({
		notes: notes || options?.notes,
		headings: frontMatter || {},
		// TODO: Fix implicit requirement on what's returned by `parseArguments()`
		private: options.private,
	});
} catch (error) {
	console.error(error);
}
