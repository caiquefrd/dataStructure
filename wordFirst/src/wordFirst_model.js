"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordFirst = void 0;
var wordFirst = /** @class */ (function () {
    function wordFirst(letters) {
        this.letters = letters;
    }
    wordFirst.prototype.firstWord = function (input1, input2) {
        if (this.letters.indexOf(input1.charAt(0)) < this.letters.indexOf(input2.charAt(0))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
            return input1;
        }
        else {
            return input2;
        }
    };
    return wordFirst;
}());
exports.wordFirst = wordFirst;
