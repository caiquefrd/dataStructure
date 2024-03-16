"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary = /** @class */ (function () {
    function Dictionary(letters) {
        this.letters = letters;
    }
    Dictionary.prototype.firstWord = function (input1, input2) {
        if (input1 < input2) {
            for (var i = 0; i < input1.length; i++) {
                if (this.letters.indexOf(input1.charAt(i)) < this.letters.indexOf(input2.charAt(i))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
                    return input1;
                }
                else {
                    return input2;
                }
            }
        }
        else {
            for (var i = 0; i < input2.length; i++) {
                if (this.letters.indexOf(input1.charAt(i)) < this.letters.indexOf(input2.charAt(i))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
                    return input1;
                }
                else {
                    return input2;
                }
            }
        }
    };
    return Dictionary;
}());
exports.default = Dictionary;
