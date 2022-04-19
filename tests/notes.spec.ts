import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';

const noteObject: Note = new Note('Hola', 'hola mundo', 'Red');

describe('Pruebas Unitarias de la Clase Note', ()=> {
  it('Prueba de instancia de Note', () =>{
    expect(noteObject).to.exist;
    expect(noteObject).not.null;
  });
  it('Prueba de metodos de acceso', () =>{
    expect(noteObject.geTitle()).to.be.eql('Hola');
    expect(noteObject.getBody()).to.be.eql('hola mundo');
    expect(noteObject.getColor()).to.be.eql('Red');
  });
});
