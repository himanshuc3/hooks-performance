class Grill {
    startGas(){}
    stopGas(){}
}

class Oven {
    setTemperature(degrees: number){}
}

// NOTE:
// 1. Conditional types - extends is equivalent to >= for type comparison
// Thought T should be within "grill" for condition to be true, i.e. part of set
type CookingDevice<T> = T extends "grill" ? Grill : Oven

let device1: CookingDevice<"grill">


let device2: CookingDevice<"oven">

type FavoriteColors = 
 | "red" 
 | "green"
 | "blue"
 | [number, number, number]
 | {red: number; green: number; blue: number}

// NOTE:
// 1. Extract - get subset of types / Exclude - opposite of Extract
// 2. TS has the concept of tuples vs arrays just like
// other statically typed languages
// 3. Generics - useful to make components more reusable/flexible
// and usually referenced as a mark of the code/component being re-sharable
type StringColors = Extract<FavoriteColors, string>

type ObjectColors = Extract<FavoriteColors, {red:number}>

type NonStringColors = Exclude<FavoriteColors, string>

// NOTE:
// 1. infer keyword helps us extract and obtain type info from larger types
class FruitStand{
    constructor(fruitNames: string[]){

    }
}

// NOTE:
// 1. ConstructorArg - infers the type of the constructor argument
// extends new - anything newable
type ConstructorArg<C>  = C extends {
    new (arg: infer A, ...args: any[ ]): any
} ? A : never

let fruits: ConstructorArg<typeof FruitStand> 
