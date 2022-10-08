import { Sorter } from "./interface/Sorter";
import { SorterBadApproach } from "./interface/SorterBadApproach";
import { NumbersCollection } from "./interface/NumbersCollection";
import { CharachtersCollection } from "./interface/CharactersCollection";
import { LinkedList } from "./interface/LinkedList";


import { NumbersCollection as NumbersCollection2 } from "./abstract/NumbersCollection";
import { CharachtersCollection as CharachtersCollection2  } from "./abstract/CharactersCollection";
import { LinkedList as LinkedList2 } from "./abstract/LinkedList";

const sorter = new SorterBadApproach([10,3,-5,0]);
sorter.sort();
console.log('sorterBadApproach',sorter.collection);

const numbersCollection = new NumbersCollection([10,3,-5,0]);
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log('numbersCollection', numbersCollection);

const numbersCollection2 = new NumbersCollection2([10,3,-5,0]);
numbersCollection2.sort();
console.log('numbersCollection2', numbersCollection2);


const charactersCollection = new CharachtersCollection('XcnPoYSA');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log('charactersCollection', charactersCollection);

const charactersCollection2 = new CharachtersCollection2('XcnPoYSA');
charactersCollection2.sort();
console.log('charactersCollection2', charactersCollection2);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(0);
linkedList.add(55);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
console.log('linkedList');
linkedList.print();

const linkedList2 = new LinkedList2();
linkedList2.add(500);
linkedList2.add(-3);
linkedList2.add(0);
linkedList2.add(55);
linkedList2.sort();
console.log('linkedList2');
linkedList2.print();
