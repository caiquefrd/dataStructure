class Dictionary {
  word1: string;
  word2: string;

  constructor(word1: string, word2: string) {
    this.word1  = word1 ;
    this.word2 = word2;
  }

  compare(): void {
    if (this.word1  < this.word2) {
      console.log(
        `${this.word1} vem antes de ${this.word2} no dicionário.`
      );
    } else if (this.word1 > this.word2) {
      console.log(
        `${this.word2} vem antes de ${this.word1} no dicionário.`
      );
    } else {
      console.log(`as palavras são iguais.`);
    }
  }
}

export default Dictionary;
