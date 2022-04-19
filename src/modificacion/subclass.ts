import {ReduceAlgortihm} from './modificacionLunes';

export class AddReduce extends ReduceAlgortihm {
  constructor(protected elements: number[]) {
    super(elements);
  }

  protected calculateReduce(): number {
    let result: number = 0;
    this.elements.forEach((item) => {
      result += item;
    });
    console.log(`El resultado es:${result}`);
    return result;
  }
}
