import 'mocha';
import {expect} from 'chai';
import {User} from '../src/models/user';

describe('Pruebas Unitarias de la clase User', () => {
  const usuario1: User = new User("Joel");
  const usuario2: User = new User("Manolo");
  const usuario3: User = new User("Pepito");

  it("Test de instancia de la clase User", () => {
    expect(usuario1).exist;
    expect(usuario1).not.null;
    expect(usuario2).exist;
    expect(usuario2).not.null;
    expect(usuario3).exist;
    expect(usuario3).not.null;
  });

  it("Test de añadir una nota a un usuario", () => {
    expect(usuario1.addNote('Nota Joel', 'Esta es la nota de las tareas de Joel', 'Red')).to.be.eql(true);
    expect(usuario1.addNote('Nota Joel numero 2', 'Esta es la segunda nota de Joel', 'Green')).to.be.eql(true);
    expect(usuario2.addNote('Nota Manolo', 'Esta es la nota de las tareas de Manolo', 'Blue')).to.be.eql(true);
    expect(usuario2.addNote('Nota Manolo numero 2', 'Esta es la segunda nota de Manolo', 'Red')).to.be.eql(true);
    expect(usuario3.addNote('Nota Pepito', 'Esta es la nota de las tareas de Pepito', 'Yellow')).to.be.eql(true);
    expect(usuario3.addNote('Nota Pepito numero 2', 'Esta es la segunda nota de Pepito', 'Yellow')).to.be.eql(true);
  });

  it("Test que añade una nota ya existente", () => {
    expect(usuario1.addNote('Nota Joel', 'Esta es la nota de las tareas de Joel', 'Red')).to.be.eql(false);
    expect(usuario2.addNote('Nota Manolo', 'Esta es la nota de las tareas de Manolo', 'Blue')).to.be.eql(false);
    expect(usuario3.addNote('Nota Pepito', 'Esta es la nota de las tareas de Pepito', 'Yellow')).to.be.eql(false);
  });

  it("Test de eliminar una nota de un usuario", () => {
    expect(usuario1.deleteNote('Nota Joel numero 2')).to.be.eql(true);
    expect(usuario2.deleteNote('Nota Manolo numero 2')).to.be.eql(true);
    expect(usuario3.deleteNote('Nota Pepito numero 2')).to.be.eql(true);
  });

  it("Test de modificacion del cuerpo de las notas de diferentes usuarios", () => {
    expect(usuario1.modifyNote("Nota Joel", "Ahora esta nota ha sido modificada")).to.eql(true);
    expect(usuario2.modifyNote("Nota Manolo", "Cuerpo de la nota de manolo nuevo")).to.eql(true);
    expect(usuario3.modifyNote("Nota Pepito", "El cuerpo será nuevo tambien en la nota de pepito")).to.eql(true);
  });
});
