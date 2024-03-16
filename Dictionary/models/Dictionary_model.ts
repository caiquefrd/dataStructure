class Dictionary {
  letters:string[] ;
  constructor(letters:string[]) {
    this.letters = letters;
  }
  firstWord(input1: string, input2: string):any {
    if ( input1 < input2 ){
      for ( let i = 0 ; i < input1.length ; i ++ ){
        if (this.letters.indexOf(input1.charAt(i)) < this.letters.indexOf(input2.charAt(i))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
          return input1;
        } else {
          return input2;
        }
      }
    }
    else {
      for ( let i = 0 ; i < input2.length ; i ++ ){
        if (this.letters.indexOf(input1.charAt(i)) < this.letters.indexOf(input2.charAt(i))) { //compara a posição da letra extraida dos inputs com o array principal do alfabeto
          return input1;
        } else {
          return input2;
        }
    }
  }
}
}




export default Dictionary;


