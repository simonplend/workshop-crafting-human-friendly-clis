import { parseArgs } from "node:util";

/**
 * We're exporting the `options` object here so we could
 * use it later to build a help feature into our CLI tool.
 */
export const options = {
	note: {
		type: "string",
		/**
		 * This allows us to accept multiple notes via:
		 *
		 *   --note "An inspiring note" --note "Another excellent note"
		 *
		 * OR because we've specified a single character alias with `short`:
		 *
		 *   -n "An inspiring note" -n "Another excellent note"
		 */
		multiple: true,
		short: "n",
	},
	private: {
		type: "boolean",
		short: "p",
	},
};

export function parseArguments() {
	return parseArgs({
		options,
	});
}
