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

// Arrays
// let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = 2;
// numbers.forEach((n) => n); // code completion/intellisense
// let numbers_ = []; // avoid this "any" type

// Tuples
// let user: [number, string] = [20, "Radiant"];
// user.push(1) <== no error but will fail

// enum
// const enum Size { // PascalCase
//   Small = 1, // the default value is 0
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);
// default value can be reset. if one reset, the other must be explicitly reset as well. except if the first key's value is number.
// define enum as constant so the compiler will generate a more optimized code

// Functions
function calculateTax(income: number): number {
  if (income < 50_000) return income * 1.4;
  return income * 1.5;
}
