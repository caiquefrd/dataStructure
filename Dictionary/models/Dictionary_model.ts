class Dictionary {
  private palavra1: string;
  private palavra2: string;

  constructor(palavra1: string, palavra2: string) {
      this.palavra1 = palavra1;
      this.palavra2 = palavra2;
  }

  compare(): void {
      if (this.palavra1 < this.palavra2) {
          console.log(`${this.palavra1} vem antes de ${this.palavra2} no dicionário.`);
      } else if (this.palavra1 > this.palavra2) {
          console.log(`${this.palavra2} vem antes de ${this.palavra1} no dicionário.`);
      } else {
          console.log(`${this.palavra1} e ${this.palavra2} são iguais.`);
      }
  }
}


export default Dictionary;


