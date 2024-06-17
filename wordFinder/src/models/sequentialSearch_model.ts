import { promises as fs } from 'fs';

async function lerArquivo(nomeArquivo: string): Promise<string[]> {
    try {
        const data = await fs.readFile(nomeArquivo, 'utf8');
        return data.split(/\s+/);
    } catch (err) {
        throw err;
    }
}

function criarStringUnica(palavras: string[], delimitador: string): string {
    return palavras.join(delimitador);
}

function buscarPalavra(stringUnica: string, palavraBusca: string): { ocorrencias: number, deslocamentos: number[] } {
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

export default async function sequentialSearch(arquivo:string) {
    try {
        const resultado = await lerArquivo(arquivo);
        console.log(resultado);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
}
