#!/usr/bin/env node
const program = require('commander'); 
const { version } = require('commander');
const touch = require('touch') ; 
const consola = require('consola'); 
const chalk = require('chalk'); 
const fs = require('fs'); 
const Git = require('nodegit'); 

program
     .version('2.0.1')
     .description('The Perfect CLI tool which can make files, directories and much more!')

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

program 
     .command('express-api <dirname>')
     .description('Creates a Simple Express-API Template in the directory mentioned')
     .action((dirname) => {
          const url = 'https://github.com/samyakbambole/express-api.git'; 
          Git.Clone(url, dirname).then(() => {
               fs.rmdir(`./${dirname}/.git`, () => {
                    consola.success(chalk.greenBright('Repository Successfully Cloned!')); 
                    console.log(''); 
               }); 
          }).then(() => {
               consola.success(chalk.greenBright('Done!')); 
               console.log('To Begin Coding,'); 
               console.log(`cd ${dirname}`);
               console.log('npm i'); 
               console.log('git remote remove origin'); 
               console.log('You are Ready to Start coding!'); 
          })
     })

program 
     .command('discord-bot <dirname>') 
     .description('Creates a Simple Discord Bot Template in the directory mentioned')
     .action((dirname) => {
          const url = 'https://github.com/samyakbambole/discord-bot-template.git'; 

          Git.Clone(url, dirname).then(() => {
               fs.rmdir(`./${dirname}/.git`, () => {
                    consola.success(chalk.greenBright('Repository Successfully Cloned!')); 
                    console.log(''); 
               }); 
          }).then(() => {
               consola.success(chalk.greenBright('Done!')); 
               console.log('To Begin Coding,'); 
               console.log(`cd ${dirname}`);
               console.log('npm i'); 
               console.log('git remote remove origin'); 
               console.log('Open the Directory in your code editor'); 
               console.log('Replace the contents of the \'token\' variable to your Discord Bot\'s Token'); 
               console.log('You are Ready to Start coding!'); 
          })
     })

program
     .command('html <dirname>')
     .description('Creates a Empty HTML, CSS, JS Template in the directory mentioned')
     .action((dirname) => {
          const url = 'https://github.com/samyakbambole/html-template.git'; 

          Git.Clone(url, dirname).then(() => {
               fs.rmdir(`./${dirname}/.git`, () => {
                    consola.success(chalk.greenBright('Repository Successfully Cloned!')); 
                    console.log(''); 
               }); 
          }).then(() => {
               consola.success(chalk.greenBright('Done!')); 
               console.log('To Begin Coding,'); 
               console.log('git remote remove origin'); 
               console.log('Open the Directory in your code editor'); 
               console.log('And Start Coding!'); 
               console.log('You are Ready to Start coding!'); 
          })
     })

program.parse(process.argv); 