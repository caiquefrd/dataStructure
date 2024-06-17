"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
function lerArquivo(nomeArquivo) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.readFile(nomeArquivo, "utf8", function (err, data) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(data.split(/\s+/));
                        }
                    });
                })];
        });
    });
}
function criarStringUnica(palavras, delimitador) {
    return palavras.join(delimitador);
}
function buscarPalavra(stringUnica, palavraBusca) {
    var ocorrencias = 0;
    var deslocamentos = [];
    var pos = stringUnica.indexOf(palavraBusca);
    var deslocamentoTotal = 0;
    while (pos !== -1) {
        ocorrencias++;
        deslocamentos.push(pos);
        deslocamentoTotal = pos + palavraBusca.length;
        pos = stringUnica.indexOf(palavraBusca, deslocamentoTotal);
    }
    return { ocorrencias: ocorrencias, deslocamentos: deslocamentos };
}
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Informe o nome do arquivo: ", function (nomeArquivo) {
        rl.question("Informe o delimitador: ", function (delimitador) {
            lerArquivo(nomeArquivo)
                .then(function (palavras) {
                var stringUnica = criarStringUnica(palavras, delimitador);
                rl.question("Digite a palavra para buscar: ", function (palavraBusca) {
                    var resultado = buscarPalavra(stringUnica, palavraBusca);
                    console.log("N\u00FAmero de ocorr\u00EAncias: ".concat(resultado.ocorrencias));
                    console.log("Deslocamentos: ".concat(resultado.deslocamentos.join(", ")));
                    console.log("Total de deslocamentos realizados: ".concat(stringUnica.length));
                    rl.close();
                });
            })
                .catch(function (err) {
                console.error("Erro ao ler o arquivo: ".concat(err.message));
                rl.close();
            });
        });
    });
}
main();
