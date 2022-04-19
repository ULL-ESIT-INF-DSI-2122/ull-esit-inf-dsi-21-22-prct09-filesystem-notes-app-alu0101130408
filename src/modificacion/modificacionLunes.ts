
export abstract class ReduceAlgortihm {
  constructor(protected elements: number[]) {
    this.elements = [];
  }

  public run():number {
    return this.calculateReduce();
  }
  protected abstract calculateReduce(): number;
}


