/*

Fetch and parse data from an API and return key/value pairs from the function.

In our notes context, this could be information about the current weather,
an inspirational quote, what happened this day 20 years ago, etc - think about it
as enhancing content to your notes.

Each of the key/value pairs will be added to the front matter of your markdown file.

Remember, to await and parse what you need to!

If you'd like some inspiration this API collection could be helpful:
https://api-ninjas.com/

*/
import { fileURLToPath } from "node:url";

export async function fetchFrontMatter() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/hobbies?category=observation",
    { headers: { "x-api-key": "8nwhD4qswzTg291zpZ1Q3w==zFcGN0dcQt7s9B28" } }
  );
  const data = await response.json();
  return {
    Suggestion: `Have you tried ${data.hobby}?`,
    Date: new Date(),
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const data = await fetchFrontMatter();
  console.log(data);
}
