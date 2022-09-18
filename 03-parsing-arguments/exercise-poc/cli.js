#!/usr/bin/env node

import { parseArguments } from "./src/parse-arguments.js";

try {
  const parsedArgs = parseArguments();

  console.dir({ parsedArgs }, { depth: null });

  const hasNotes = parsedArgs.values.note?.length > 0;
  if (!hasNotes) {
    // TODO: Do interactive stuff here
    console.log("Now we need to ask the user questions...");
  }

  // TODO: Write Markdown entry
} catch (error) {
  console.error(`Error: ${error.message}`);
}
