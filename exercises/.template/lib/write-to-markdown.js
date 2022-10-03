import {readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

export async function writeToMarkdown(options) {
  if (!options.notes?.length) {
    throw new Error("No notes to save.");
  }

  const today = new Date();
  const fileName = `${today.getDate()}-${String(today.getMonth()).padStart(
    2,
    '0',
  )}-${today.getUTCFullYear()}.${options.private ? 'private.md' : 'md'}`;

  const path = join('notes', fileName);

  try {
    // TODO: Use `appendFile`
    const currentFile = await readFile(path);
    const newFile = `${currentFile.toString()}\n${options.notes.join('\n')}`;
    await writeFile(path, newFile);
  } catch (error) {
    if (error.code === 'ENOENT') {
      let newFile = '---\n';

      // TODO: Handle if there's no headings
      for (const key in options.headings) {
        newFile += `${key}: ${options.headings[key]}\n`;
      }

      newFile += '---\n';
      newFile += options.notes.join('\n');

      await writeFile(path, newFile);
    } else {
      console.error(error);
    }
  }
}

const self = fileURLToPath(import.meta.url);

if (process.argv[1] === self) {
  const test = {
    notes: [
      'This is an',
      'array of comma seperated',
      'values that each represent a note',
    ],
    private: false,
    headings: {temperature: '27'},
  };

  writeToMarkdown(test);
}
