import { mountains, findNameOfTallestMountain } from "./mountains";
import "./products";
import "./inventory";
import { calcAverageProductPrice, products } from "./products";

// example of interface inside another interface
// describe obj within obj's
interface Person {
  name: string;
  age: number;
}

interface Family {
  parent1: Person;
  parent2: Person;
  sibling1?: Person;
  sibling2?: Person;
}

// object inside of object
const andreasFamily: Family = {
  parent1: {
    name: "Julie",
    age: 57,
  },
  parent2: {
    name: "Mike",
    age: 57,
  },
  sibling1: {
    name: "Erik",
    age: 32,
  },
};

// console.log(findNameOfTallestMountain(mountains));
const tallestMtn: string = findNameOfTallestMountain(mountains);
console.log(tallestMtn, "(Line 38 in index.ts)");

// console.log(findNameOfTallestMountain())

const productAvg: number = calcAverageProductPrice(products);
console.log(productAvg, "(Line 43 in index.ts)");
