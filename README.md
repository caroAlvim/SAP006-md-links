# Markdown Links

Desenvolvido com 🍕 e ☕️ por [Carolina Alvim.](https://github.com/caroAlvim/)

## Resumo

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Com esta lib é possivel:
- analisar arquivo com extensão .md;
- verificar se há links no arquivo markdown;
- nao encontrando, emitir msg avisando que não há links;
- caso encontre links, analisar se os links funcionam;
- retornar lista com os links identificados;
- retornar com o status http de cada link encontrado;


## Instalação

### NPM

No terminal, executar o comando:

`npm i md-links-caroalvim`

Após a instalação, execute a lib com o comando `npx md-links-caroalvim <path-to-file>`

* Exemplo: `npx md-links-caroalvim ./files/text-for-test.md`

Para avaliar cada link e receber a lista com os links e os status http, executar o comando:
`npx md-links-caroalvim <path-to-file> validate`

* Exemplo: `npx md-links-caroalvim ./files/text-for-test.md`

***  O caminho do arquivo pode ser relativo ao diretório de onde você está executando a lib, ou absoluto.


## Implementações futuras

- Adicionar Eetatísticas;


## Tecnologias utilizadas

<div align="inline_block">
  <a href="https://github.com/caroAlvim">
</div>
  
<div style="display: inline_block"><br>

  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img title="Javascript" align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img title="Git" align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img title="VScode" align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img title="Github" align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  
</div><br>
