import * as fs from "fs";
import * as readline from "readline";

async function lerArquivo(nomeArquivo: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(nomeArquivo, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.split(/\s+/));
      }
    });
  });
}

function criarStringUnica(palavras: string[], delimitador: string): string {
  return palavras.join(delimitador);
}

function buscarPalavra(
  stringUnica: string,
  palavraBusca: string
): { ocorrencias: number; deslocamentos: number[] } {
  let ocorrencias = 0;
  let deslocamentos: number[] = [];
  let pos = stringUnica.indexOf(palavraBusca);
  let deslocamentoTotal = 0;

  while (pos !== -1) {
    ocorrencias++;
    deslocamentos.push(pos);
    deslocamentoTotal = pos + palavraBusca.length;
    pos = stringUnica.indexOf(palavraBusca, deslocamentoTotal);
  }

  return { ocorrencias, deslocamentos };
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Informe o nome do arquivo: ", (nomeArquivo) => {
    rl.question("Informe o delimitador: ", (delimitador) => {
      lerArquivo(nomeArquivo)
        .then((palavras) => {
          const stringUnica = criarStringUnica(palavras, delimitador);
          rl.question("Digite a palavra para buscar: ", (palavraBusca) => {
            const resultado = buscarPalavra(stringUnica, palavraBusca);
            console.log(`Número de ocorrências: ${resultado.ocorrencias}`);
            console.log(`Deslocamentos: ${resultado.deslocamentos.join(", ")}`);
            console.log(
              `Total de deslocamentos realizados: ${stringUnica.length}`
            );
            rl.close();
          });
        })
        .catch((err) => {
          console.error(`Erro ao ler o arquivo: ${err.message}`);
          rl.close();
        });
    });
  });
}

main();
