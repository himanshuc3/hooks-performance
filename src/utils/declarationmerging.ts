// NOTE:
// 1. Stacked type/values
// 2. namespaces are useful mostly for maintaining
// backwards compatibility
interface Fruit {
  name: string;
  mass: number;
  color: string;
}

const Fruit = {
  name: "banana",
  color: "yellow",
  mass: 183,
  quantity: 43,
};

namespace ExampleNamespace {
  const foo = 1;
}

class FruitClass {
  name?: string;
  mass?: number;
  color?: string;
  static createBanana(): Fruit {
    return { name: "banana", color: "yellow", mass: 184 };
  }
}

type DateKeyNames = keyof Date;
// NOTE:
// 1. Visually using venn diagrams
type DateStringKeyNames = DateKeyNames & string;

type FruitType = typeof Fruit;

export { Fruit, ExampleNamespace, FruitClass };
