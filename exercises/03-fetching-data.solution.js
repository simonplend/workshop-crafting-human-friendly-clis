import { fileURLToPath } from "node:url";

export async function fetchFrontMatter() {
	const response = await fetch(
		"https://api.api-ninjas.com/v1/hobbies?category=observation",
		// Note: You should generally avoid committing API keys into your code!
		// This is just for the purpose of this exercise solution.
		{ headers: { "x-api-key": "8nwhD4qswzTg291zpZ1Q3w==zFcGN0dcQt7s9B28" } }
	);

	const data = await response.json();

	return {
		date: new Date(),
		suggestion: `Have you tried ${data.hobby}?`,
	};
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	const data = await fetchFrontMatter();
	console.log(data);
}
