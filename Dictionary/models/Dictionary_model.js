"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary = /** @class */ (function () {
    function Dictionary(word1, word2) {
        this.word1 = word1;
        this.word2 = word2;
    }
    Dictionary.prototype.compare = function () {
        if (this.word1 < this.word2) {
            console.log("".concat(this.word1, " vem antes de ").concat(this.word2, " no dicion\u00E1rio."));
        }
        else if (this.word1 > this.word2) {
            console.log("".concat(this.word2, " vem antes de ").concat(this.word1, " no dicion\u00E1rio."));
        }
        else {
            console.log("as palavras s\u00E3o iguais.");
        }
    };
    return Dictionary;
}());
exports.default = Dictionary;
