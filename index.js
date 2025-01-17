import chalk from 'chalk';
import fs from 'fs';

function linksExtractor(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
  const linksArray = [];
  let temp;

  while((temp = regex.exec(text)) !== null) {
    linksArray.push({ [temp[1]]: temp[2] })
  }
  console.log(chalk.yellow('O total de links encontrado é: ' + linksArray.length))
  return linksArray.length === 0 ? 'Sem links' : linksArray;
}

function verify(error) {
  throw new Error(chalk.red(error.code, 'Não encontrado'));
}

async function getFile(endpointFile) {
  const encoding = 'utf-8';
  try {
      const textFile = await fs.promises.readFile(endpointFile, encoding)
      return linksExtractor(textFile);
  } catch(erro) {
      verify(erro)
  }
}


//mdLinks(relative)
// function getFile(endpointFile){
//     const encoding = 'utf-8';
//     try {
//       const textCheck = fs.promises
//       .readFile(endpointFile, encoding)
//       .then((text) =>  linksExtractor(text));
//       return textCheck
//     }
//     catch(error){
//       verify(error);
//     } finally {
//       console.log(chalk.yellow('Operação concluída'));
//     }
// }

// fs.readFile(file, [encoding], [callback]);


export default getFile;

