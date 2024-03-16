"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_model_1 = require("./models/Dictionary_model");
var promptSync = require("prompt-sync"); //necessário instalar pacote prompt-sync -> npm install prompt-sync
var prompt = promptSync();
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var l = new Dictionary_model_1.default(alphabet);
console.log("A palavra anterior no dicion\u00E1rio \u00E9: ".concat(l.firstWord(prompt('Entre com a primeira palavra: '), prompt('Entre com a segunda palavra: '))));
