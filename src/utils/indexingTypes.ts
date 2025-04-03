interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

// NOTE:
// 1. Indexing helps take a subtype out of an interface
let carColor: Car["color"];
let carColorRed: Car["color"]["red"];

let carProperty: Car["color" | "year"];

// NOTE:
// 1. Mapped types in index signature
type Fruit = {
  name: string;
  color: string;
  quantity: Number;
};

type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit };

//NOTE:
// 1. Record is built in type with same behavior in ts
type MyRecord2<KeyType extends string, ValueType> = {
  [Key in KeyType]: ValueType;
};
