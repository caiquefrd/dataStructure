class Dictionary {
  letters:string[] ;
  constructor(letters:string[]) {
    this.letters = letters;
  }
  firstWord(input1: string, input2: string):string {
    if (this.letters.indexOf(input1.charAt(0)) < this.letters.indexOf(input2.charAt(0))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
      return input1;
    } else {
      return input2;
    }
  }
}




export default Dictionary;


