import Dictionary from './models/Dictionary_model';
import * as promptSync from 'prompt-sync' //necessário instalar pacote prompt-sync -> npm install prompt-sync

const prompt = promptSync();

const alphabet:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const l = new Dictionary(alphabet);

console.log(`A palavra anterior no dicionário é: ${l.firstWord(prompt('Entre com a primeira palavra: '), prompt('Entre com a segunda palavra: '))}`);
