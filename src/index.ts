// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

// ==== The any Type is Bad
// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;

// function render(component: any) {
//   console.log(component);
// }

// ==== Arrays
// let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = 2;
// numbers.forEach((n) => n); // code completion/intellisense
// let numbers_ = []; // avoid this "any" type

// ==== Tuples
// let user: [number, string] = [20, "Radiant"];
// user.push(1) <== no error but will fail

// ==== enum
// const enum Size { // PascalCase
//   Small = 1, // the default value is 0
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);
/**
 * default value can be reset.
 * if one reset, the other must be explicitly reset as well.
 * except if the first key's value is number.
 *
 * define enum as constant so the compiler will generate
 * a more optimized code
 */

// ==== Functions
function calculateTax(income: number, taxYear = 2022): number {
  // let x;
  if (taxYear < 2022) return income * 1.4;
  return income * 1.5;
}
calculateTax(11_000, 2023); // the second parameter will overwrite the default value
/**
 * for the best pratice, always anotate your function's
 * all the parameters and return types and enable three compiler
 * options
 *
 */

// ==== Objects
// let employee: {
//   // this is shape object
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Radiant",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.id = 2; <== the value of this property cannot be modified because it's readonly

// ==== Type alias
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
}; // this object can be reused in multiple places

let employee: Employee = {
  id: 20,
  name: "Radiant",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ==== Union type
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// Intersection types
type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
