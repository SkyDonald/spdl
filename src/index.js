const spdl = require('spdl-core');
const program = require('commander');
const { createWriteStream } = require('fs');
const { credentials } = require('./../config.json');
const chalk = require('chalk');

spdl.setCredentials(credentials.clientId, credentials.clientSecret);

program
  .version(require('./../package.json').version)
  .description('Spotify track downloader module. Written in pure javascript.')
  .arguments('<url>')
  .action(async (url) => {
    const song = await spdl.getInfo(url);
    const stream = await spdl(song.url);
    stream.pipe(createWriteStream(`${song.title}.mp3`));
    stream.on('error', (err) => console.log(chalk.bold.red(`Error: ${err}`)));
    stream.on('end', () => console.log(chalk.bold.green(`${song.title} downloaded`)));
  })
  .parse(process.argv);