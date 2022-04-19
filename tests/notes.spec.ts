import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';

const firstNote: Note = new Note('Primera Nota', 'Esta es la primera nota', 'Red');

describe('Pruebas Unitarias de la Clase Note', ()=> {
  it('Prueba de instancia de la clase Note', () =>{
    expect(firstNote).to.exist;
    expect(firstNote).not.null;
  });
  it('Prueba de metodos de acceso "Getters" de la clase Note', () =>{
    expect(firstNote.geTitle()).to.be.eql('Primera Nota');
    expect(firstNote.getBody()).to.be.eql('Esta es la primera nota');
    expect(firstNote.getColor()).to.be.eql('Red');
  });

  it('Prueba de metodos de acceso "Setters" de la clase Note', () =>{
    firstNote.seTitle('Nota Actualizada');
    expect(firstNote.geTitle()).to.be.eql('Nota Actualizada');
    firstNote.setBody('Se ha actualizado el valor de la primera nota');
    expect(firstNote.getBody()).to.be.eql('Se ha actualizado el valor de la primera nota');
    firstNote.setColor('Green');
    expect(firstNote.getColor()).to.be.eql('Green');
  });
});
