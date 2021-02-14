const spdl = require('spdl-core');
const program = require('commander');
const { createWriteStream } = require('fs');

program
  .version(require('./../package.json').version)
  .description('Spotify track downloader module. Written in pure javascript.');

program
  .command('track <url>')
  .description('Download a Spotify track')
  .action(async url => {
    const song = await spdl.getInfo(url);
    const stream = await spdl(song.url);
    stream.pipe(createWriteStream(`${song.title}.mp3`));
  });

program.parse(process.argv);