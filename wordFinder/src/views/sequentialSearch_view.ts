import sequentialSearch from "../models/sequentialSearch_model";
import promptSync from 'prompt-sync' // necessário instalar pacote prompt-sync -> npm install prompt-sync
    ; // necessário instalar pacote prompt-sync -> npm i --save-dev @types/prompt-sync

const prompt = promptSync();

const palavraBuscada = prompt('Entre com a palavra que deseja encontrar: ');
const delimitador = prompt('Entre com a palavra o delimitador que deseja utilizar: ');

sequentialSearch("./hino_do_sao_paulo.txt", palavraBuscada , delimitador)