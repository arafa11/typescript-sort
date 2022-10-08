export class SorterBadApproach {
  
  constructor(public collection: number[] | string) {
    
  }

  sort(): void{
    const { length } = this.collection;
    for(let i=0; i < length; i++) {
      for(let j=0;j < length - i - 1;j++) {
        // if collection was an array of numbers
        // type guard (restrict access to one of types)
        if(this.collection instanceof Array){ 
          if(this.collection[j] > this.collection[j+1]){
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand;
          }
        }
        
        // if collection was a string
        if(typeof this.collection === 'string'){ // type guard
        //   // str.split('').sort((a, b) => a.localeCompare(b)).join('');
          if(this.collection[j].localeCompare(this.collection[j+1]) === 1){
        //     const leftHand = this.collection[j];
        //     this.collection[j] = this.collection[j+1];
        //     this.collection[j+1] = leftHand;
          }
        }

        
      }
    }
  }
}