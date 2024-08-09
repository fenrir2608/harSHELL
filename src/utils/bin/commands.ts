// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `welcome to harSHELL, Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `hello, i'm harsh. 
welcome to my terminal. i like coding.
you can view more about me here:
'summary' - short summary.
'resume' - my latest resume.
'projects' - projects i've worked on/currently working on.`
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const sponsor = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
you can support my work by sponsoring me on github:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.github}" target="_blank">github</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Emailing ${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `every
terminal
should
have
ls`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'sponsor'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: ask harsh maybe? `;
};

export const secret = async (args?: string[]): Promise<string> => {
  window.open('https://youtu.be/yxx-4c0aP-0', '_blank'); // ...I'm sorry
  return 'Opening secret...';
};

// Banner
export const banner = (args?: string[]): string => {
  return `                      _                   _     _        
  /\\  /\\__ _ _ __ ___| |__     /\\/\\   ___| |__ | |_ __ _ 
 / /_/ / _\` | '__/ __| '_ \\   /    \\ / _ \\ '_ \\| __/ _\` |
/ __  / (_| | |  \\__ \\ | | | / /\\/\\ \\  __/ | | | || (_| |
\\/ /_/ \\__,_|_|  |___/_| |_| \\/    \\/\\___|_| |_|\\__\\__,_|          


Type 'help' to see the list of available commands.
Type 'projects' to see the links to all my open source projects.
Type 'summary' to display summary.
Type 'repo' or click <u><a class='text-light-blue dark:text-dark-blue underline' href='${config.repo}' target='_blank'>here</a></u> for the Github repository.'`;
};
