console.log("Hello World");

// Basic types
function add(n1: number, n2: number): number {
  return n1 + n2;
}

let number0: number; // The type is explicit
const number1 = 5; // The type is inferred from the value
const number2 = 2.8;

const result: number = add(number1, number2);
console.log("The result is " + result);

// All the basic types
const string1 = "Hello";
const boolean1 = true;
const number3 = 5;

console.log("Type of string1 is " + typeof string1);
console.log("Type of boolean1 is " + typeof boolean1);
console.log("Type of number3 is " + typeof number3);

// Object types
const person = {
  name: "Maximilian",
  age: 30,
};

console.log("Type of person is " + typeof person);
console.log(
  "Person is: " + person.name + " and he is " + person.age + " years old."
);

let dog: {
    name: string;
    age: number;
    isGoodBoy: boolean;
};
dog = {
    name: "Bobby",
    age: 5,
    isGoodBoy: true,
};
console.log("Type of dog is " + typeof dog);


// Enum type
enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = "READ_ONLY",
    AUTHOR = "AUTHOR",
}
const myRole  = Role.ADMIN;

if (myRole === Role.ADMIN) {
    console.log("You are an " + Role.ADMIN);
}
