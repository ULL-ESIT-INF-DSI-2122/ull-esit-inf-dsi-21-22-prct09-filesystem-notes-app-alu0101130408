import 'mocha';
import {expect} from 'chai';
import {User} from '../src/user';

describe('Class UserNotes', () => {
  // UserNotes -> Notas de Usuario
  const Usuario1: User = new User("Juan");

  it("Create new Object UserNotes", () => {
    expect(Usuario1).not.null;
  });
});
