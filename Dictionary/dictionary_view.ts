import Dictionary from './models/Dictionary_model';
import * as promptSync from 'prompt-sync' // necessário instalar pacote prompt-sync -> npm install prompt-sync

const prompt = promptSync();

let word1:string = prompt('Entre com a primeira palavra: ')
let word2:string = prompt('Entre com a segunda palavra: ')

const operacao = new Dictionary(word1 , word2);

operacao.compare(); 