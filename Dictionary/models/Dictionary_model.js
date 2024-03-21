"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary = /** @class */ (function () {
    function Dictionary(palavra1, palavra2) {
        this.palavra1 = palavra1;
        this.palavra2 = palavra2;
    }
    Dictionary.prototype.compare = function () {
        if (this.palavra1 < this.palavra2) {
            console.log("".concat(this.palavra1, " vem antes de ").concat(this.palavra2, " no dicion\u00E1rio."));
        }
        else if (this.palavra1 > this.palavra2) {
            console.log("".concat(this.palavra2, " vem antes de ").concat(this.palavra1, " no dicion\u00E1rio."));
        }
        else {
            console.log("".concat(this.palavra1, " e ").concat(this.palavra2, " s\u00E3o iguais."));
        }
    };
    return Dictionary;
}());
exports.default = Dictionary;
