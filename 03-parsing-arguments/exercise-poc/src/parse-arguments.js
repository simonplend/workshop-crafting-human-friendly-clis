import {parseArgs} from 'node:util';

export const cliOptions = {
  note: {
    type: 'string',
    multiple: true,
    short: 'n',
  },
  private: {
    type: 'boolean',
    short: 'p',
  },
};

export function parseArguments() {
  return parseArgs({
    options: cliOptions,
    tokens: true,
  });
}
