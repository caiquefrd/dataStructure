import { promises as fs } from 'fs';

async function lerArquivo(nomeArquivo: string): Promise<string[]> {
    try {
        const data = await fs.readFile(nomeArquivo, 'utf8');
        console.log("passa aqui")
        return data.split(/\s+/);
    } catch (err) {
        throw err;
    }
}

lerArquivo("./hino_do_sao_paulo.txt")
