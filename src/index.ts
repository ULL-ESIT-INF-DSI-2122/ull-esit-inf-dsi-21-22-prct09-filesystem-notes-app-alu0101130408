import * as yargs from 'yargs';

import {ColorNotes} from './models/note';
import {User} from './models/user';


function main(): void {
  yargs.command({
    command: 'add',
    describe: 'Añadir una nueva nota al sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Cuerpo',
        demandOption: true,
        type: 'string',
      },
      color: {
        describe: 'Color',
        demandOption: true,
        type: 'string',
      },

    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
        const usuario: User = new User(argv.user);
        const color: ColorNotes = colorGetter(argv.color);
        if (usuario.addNote(argv.title, argv.body, color)) {
          usuario.updateUser();
        }
      }
    },
  });

  yargs.command({
    command: 'modify',
    describe: 'Modificar del cuerpo de nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Cuerpo',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string') {
        const usuario: User = new User(argv.user);

        if (usuario.modifyNote(argv.title, argv.body)) {
          usuario.updateUser();
        }
      }
    },
  });


  yargs.command({
    command: 'delete',
    describe: 'Elimina una nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string') {
        const usuario: User = new User(argv.user);
        if (usuario.deleteNote(argv.title)) {
          usuario.updateUser();
        }
      }
    },
  });

  yargs.command({
    command: 'colorModify',
    describe: 'modificar el color de una nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
      color: {
        describe: 'Color',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.color === 'string') {
        const usuario: User = new User(argv.user);
        const color: ColorNotes = colorGetter(argv.color);
        if (usuario.modifyNoteColor(argv.title, color)) {
          usuario.updateUser();
        }
      }
    },
  });


  yargs.command({
    command: 'read',
    describe: 'Lee una nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string') {
        const usuario: User = new User(argv.user);
        usuario.printNotes(argv.title);
      }
    },
  });

  yargs.command({
    command: 'list',
    describe: 'Lista las notas del usuario',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string') {
        const usuario: User = new User(argv.user);
        usuario.printTitles();
      }
    },
  });

  yargs.parse();
}


function colorGetter(color: string): ColorNotes {
  let color_: ColorNotes = "Green";
  switch (color) {
    case "Blue":
      color_ = "Blue";
      break;
    case "Red":
      color_ = "Red";
      break;
    case "Yellow":
      color_ = "Yellow";
      break;
    case "Green":
      color_ = "Green";
      break;
    default:
      console.log("Color no valido, asigando Verde como predeterminado");
      break;
  }
  return color_;
}
main();
