"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wordFirst_model_1 = require("./src/wordFirst_model");
var promptSync = require("prompt-sync");
var prompt = promptSync();
var l = new wordFirst_model_1.wordFirst(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
console.log("A palavra anterior no dicion\u00E1rio \u00E9: ".concat(l.firstWord(prompt('Entre com a primeira palavra: '), prompt('Entre com a segunda palavra: '))));