import Dictionary from './src/Dictionary_model';
import * as promptSync from 'prompt-sync'

const prompt = promptSync();


const l = new Dictionary(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

console.log(`A palavra anterior no dicionário é: ${l.firstWord(prompt('Entre com a primeira palavra: '), prompt('Entre com a segunda palavra: '))}`);
