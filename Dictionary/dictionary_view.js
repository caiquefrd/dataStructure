"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_model_1 = require("./models/Dictionary_model");
var promptSync = require("prompt-sync"); //necessário instalar pacote prompt-sync -> npm install prompt-sync
var prompt = promptSync();
var word1 = prompt('Entre com a primeira palavra: ');
var word2 = prompt('Entre com a segunda palavra: ');
var operacao = new Dictionary_model_1.default(word1, word2);
operacao.compare();
