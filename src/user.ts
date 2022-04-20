import {Note, ColorNotes} from './note';
import {Bdd} from './bdd';

const chalk = require('chalk');

export class User {
  // constructor
  constructor(private userName: string, private Notes: Note[]= [], private DataBase:Bdd = new Bdd(userName, Notes)) {
  }

  updateUser() {
    this.DataBase.updateDbb(this.userName, this.Notes);
  }

  // check
  exist(title: string): [boolean, Note] {
    let found: boolean = false;
    let foundNote:Note = new Note('-', '-', 'Red');
    this.Notes.forEach((item) => {
      if (item.geTitle() === title) {
        found = true;
        foundNote = item;
      }
    });
    return [found, foundNote];
  }

  // add
  addNote(title: string, body: string, Color: ColorNotes): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (!check[0]) {
      this.Notes.push(new Note(title, body, Color));
      finish = true;
      console.log(chalk.blue.bold('Se ha añadido la nueva nota'));
    } else {
      console.log(chalk.red.bold('Ya existe una nota igual'));
    }
    return finish;
  }

  // Modify
  modifyNote(title: string, bodyToModify: string): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1]);
      this.Notes[index].setBody(bodyToModify);
      finish = true;
      console.log(chalk.blue.bold('Se ha modificado el cuerpo de la nota'));
    } else {
      console.log(chalk.red.bold('No existe la nota a modificar'));
    }
    return finish;
  }
  // remove
  deleteNote(title: string): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1]);
      if (index > -1) {
        this.Notes.splice(index, 1);
        finish = true;
        console.log(chalk.blue.bold(`Se ha eliminado la nota con titulo ${title}`));
      }
    } else {
      console.log(chalk.red.bold('Ha introducido mal el titulo o no existe la nota con ese titulo'));
    }
    return finish;
  }
  // print
  printTitles(): void {
    console.log("notas de" + this.userName + ":");
    this.Notes.forEach((item) => {
      item.printTitle();
    });
  }

  printNotes(title : string): void {
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      console.log(`────────────────────────────────`);
      check[1].printTitle();
      check[1].printBody();
      console.log(`────────────────────────────────`);
    } else {
      console.log(chalk.red.bold('Ha introducido mal el titulo o no existe la nota con ese titulo'));
    }
  }
}
