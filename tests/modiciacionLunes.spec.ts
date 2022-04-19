import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/modificacion/subclass';

const array: AddReduce = new AddReduce([1, 2, 3]);

describe('Pruebas de addReduce', ()=> {
  it('addReduce example', () =>{
    expect(array.run()).to.be.eql(6);
  });
});
