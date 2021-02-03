#!/usr/bin/env node
const program = require('commander'); 
const touch = require('touch') ; 
const consola = require('consola'); 
const chalk = require('chalk'); 
const { version } = require('commander');

program
     .version('1.0.0')
     .description('The Touch Command for Windows!')

program
     .command('file <filename>') 
     .description('Creates a File')
     .action((filename) => {
          touch(filename); 
          consola.success(chalk.greenBright(`Successfully Created File ${filename}`));
     })

program.parse(process.argv); 