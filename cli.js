#!/usr/bin/env node

import getFile from './index.js';
import validateURL from './validateURL.js';
import chalk from 'chalk';

const route = process.argv;

async function textProcessing(endpoint) {
    const result = await getFile(endpoint[2]);
    if(route[3] === 'validate') {
        console.log(chalk.yellow('Links validados'), await validateURL(result));
        console.log(chalk.blue('Operação concluída'));
    } else {
        console.log(chalk.yellow('lista de links'), result);
    }
}

textProcessing(route)