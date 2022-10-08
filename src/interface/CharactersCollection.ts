export class CharachtersCollection {
  constructor(public data: string) {}
  
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charecters = this.data.split('');
    const leftHand = this.data[leftIndex];
    charecters[leftIndex] = charecters[rightIndex];
    charecters[rightIndex] = leftHand;
    this.data = charecters.join('');
  }

}