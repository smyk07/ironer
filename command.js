#!/usr/bin/env node
const program = require('commander'); 
const { version } = require('commander');
const touch = require('touch') ; 
const consola = require('consola'); 
const chalk = require('chalk'); 
const fs = require('fs'); 

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

program
     .command('dir <dirname>')
     .description('Creates a Directory')
     .action((dirname) => {
          fs.mkdir(dirname, () => {
               consola.success(chalk.greenBright(`Successfully Created Directory ${dirname}`)); 
          }); 
     }) 

program.parse(process.argv); 