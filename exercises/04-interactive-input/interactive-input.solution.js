import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";

export async function gatherNotesInteractively() {
  console.log("Hey, I'm ready to take your note!\n");
  const rl = readline.createInterface({ input, output });
  const notes = [];

  while (true) {
    const note = await rl.question("?:");
    if (!note) {
      const sure = await rl.question(
        "Looks like you're done. Are you sure? (y/n) "
      );
      if (sure.toLowerCase() === "y") {
        break;
      }
    }
    notes.push(note);
  }

  const askIsPrivate = await rl.question(
    "Would you like these notes to be private? (y/n) "
  );

  const isPrivate = askIsPrivate.toLowerCase() === "y" ? true : false;

  rl.close();
  return { notes, isPrivate };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(await gatherNotesInteractively());
}
