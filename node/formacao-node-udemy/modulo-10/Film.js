class Film {

   constructor(title, year, gender, director, duration) {
      this.title = title;
      this.year = year;
      this.gender = gender;
      this.director = director;
      this.duration = duration;
      this.actors = [];
   }

   reproduce() {
      console.log('Reproduzindo...');
   }

   pause() {
      console.log('Pause!');
   }

   exit() {
      console.log('Saindo!');
   }

   allInformation() {
      console.log('Título: ' + this.title);
      console.log('Ano: ' + this.year);
      console.log('Gênero: ' + this.gender);
      console.log('Diretor: ' + this.director);
      console.log('Duração: ' + this.duration);
   }

}

const avengers = new Film('Avengers', 2014, 'Ação', 'Alguém', '2h');

avengers.reproduce();
avengers.pause();
avengers.exit();
avengers.allInformation();