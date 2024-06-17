import { promises as fs } from 'fs';

async function lerArquivo(nomeArquivo: string): Promise<string[]> {
    try {
        const data = await fs.readFile(nomeArquivo, 'utf8');
        return data.split(/\s+/);
    } catch (err) {
        throw err;
    }
} //devolve array de string

function criarStringUnica(palavras: string[], delimitador: string): string {
    return palavras.join(delimitador);
}

function buscarPalavra(stringUnica: string, palavraBusca: string): { ocorrencias: number, deslocamentos: number[] } {
    let ocorrencias = 0;
    let deslocamentos: number[] = [];
    let pos = stringUnica.indexOf(palavraBusca);
    console.log("posicao inicial = " + pos)  //inicia na primeira posição encontrada : 8
    let deslocamentoTotal = 0;

    while (pos !== -1) {
        ocorrencias++;
        deslocamentos.push(pos + 1);
        deslocamentoTotal = pos + palavraBusca.length;
        pos = stringUnica.indexOf(palavraBusca, deslocamentoTotal); //atualiza para a pos da prox ocorrencia, continua ...
    }

    return { ocorrencias, deslocamentos, };
}

export default async function sequentialSearch(arquivo:string, palavraBuscada:string, delimitador:string) {
        const arquivoLido = await lerArquivo(arquivo);
        console.log(arquivoLido) //debug
        const stringUnica = criarStringUnica(arquivoLido, delimitador)
        console.log("STRING UNICA ===  " + stringUnica); //debug
        const resultado = buscarPalavra(stringUnica, palavraBuscada)
        console.log(resultado)
}
