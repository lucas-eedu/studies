class Creating {
   Create(name) {
      console.log('Arquivo criado!');
   }
}

class Deleting {
   Delete(name) {
      console.log('Arquivo excluído!');
   }
}

class FileManipulation {
   constructor(name) {
      this.archive = name;
      this.creating = new Creating;
      this.deleting = new Deleting;
   }
}

const file = new FileManipulation();

file.creating.Create();
file.deleting.Delete();