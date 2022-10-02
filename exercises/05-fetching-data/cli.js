#!/usr/bin/env node

// Import {parseArguments} from './src/parse-arguments.js';
import { writeToMarkdown } from "../../helpers/writeToMarkdown.js";
import { fetchFrontMatter } from "./fetch-front-matter.solution.js";

try {
  // For this example, we'll ignore all arguments, but this is how you'd use
  // the parseArgs exercise in situ
  // const parsedArgs = parseArguments();

  // console.dir({parsedArgs}, {depth: null});

  // const hasNotes = parsedArgs.values.note?.length > 0;

  // Our exercise work around:
  const hasNotes = false;
  let notes = {};

  if (!hasNotes) {
    // TODO: Do interactive stuff here
    // notes = await gatherNotesInteractively();
  }

  const frontMatter = await fetchFrontMatter();

  notes = {
    notes: [
      "This is an",
      "array of comma seperated",
      "values that each represent a note",
    ],
    isPrivate: false,
    headings: frontMatter,
  };

  // TODO: Write Markdown entry
  await writeToMarkdown(notes);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
