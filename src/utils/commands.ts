import tryEval from './eval';

export type CommandAPI = {
  onClose: () => void;
  onClear: () => void;
};

export type Command = {
  description: string;
  handler: (args: string[], commandAPI: CommandAPI) => string;
};

const commands: Record<string, Command> = {
  coinflip: {
    description: 'Flip a coin',
    handler: () => {
      const coin = Math.random() < 0.5 ? 'heads' : 'tails';
      return `It's ${coin}!`;
    },
  },
  tableflip: {
    description: 'Flip a table',
    handler: () => '(╯°□°）╯︵ ┻━┻',
  },
  shrug: {
    description: 'Do a Shrug',
    handler: () => '¯\\_(ツ)_/¯',
  },
  eval: {
    description: 'Evaluate a JavaScript expression',
    handler: (args: string[]) => tryEval(args.join(' ')).toString(),
  },
  close: {
    description: 'Close the terminal',
    handler: (_, commandAPI) => {
      commandAPI.onClose();
      return 'Bye!';
    },
  },
  clear: {
    description: 'Clear the terminal',
    handler: (_, commandAPI) => {
      commandAPI.onClear();
      return '';
    },
  },
  linkedin: {
    description: 'Open my LinkedIn profile',
    handler: () => {
      window.open('https://www.linkedin.com/in/paripsky');
      return 'Linkedin opened in a new tab';
    },
  },
  help: {
    description: 'Show help',
    handler: () => {
      const commandsList = Object.keys(commands)
        .map((cmd) => {
          return `${cmd}: ${commands[cmd].description}`;
        })
        .join('\n');

      return `Available commands:\n${commandsList}`;
    },
  },
};

function handleCommand(command: string, commandAPI: CommandAPI) {
  const cmd = command.split(' ')[0].toLowerCase();
  const args = command.split(' ').slice(1);

  if (!commands[cmd]) {
    return `Unknown command: ${cmd}`;
  }

  return commands[cmd].handler(args, commandAPI);
}

export default handleCommand;
