import { parseArgs } from "node:util";

const args = parseArgs({
	// options: {
	// 	name: {
	// 		type: "string",
	// 	},
	// 	verbose: {
	// 		type: "boolean",
	// 		short: "v",
	// 	},
	// },
	// strict: false,
	// allowPositionals: true,
	// tokens: true,
});

console.dir(args, { depth: null });
