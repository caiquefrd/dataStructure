class wordFirst {
  letters: any;
  constructor(letters: any) {
    this.letters = letters;
  }
  firstWord(input1: any, input2: any):string {
    if (this.letters.indexOf(input1.charAt(0)) < this.letters.indexOf(input2.charAt(0))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
      return input1;
    } else {
      return input2;
    }
  }
}

// testando ------------------------
// const letters:any = ["a", "b", "c"]
// let input1:string = "a";
// let input2:string = "c";

// console.log(letters.indexOf(input2))

const l = new wordFirst(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);


console.log(`Palavra anterior: ${l.firstWord('aviao', 'jacaré')}`);