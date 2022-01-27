class Dice {

   constructor(faces) {
      this.faces = faces;
   }

   rollDice() {
      console.log('Resultado do dado: ' + this.getRandomInclusive(1, this.faces));
   }

   getRandomInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }
}

const d6 = new Dice(6);
d6.rollDice();