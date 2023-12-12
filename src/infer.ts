// return type of function
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string) {
  return `Hello, ${name}`;
}

type GreetingReturnType = ReturnTypeOf<typeof greet>;
const greeting: GreetingReturnType = greet("Alice");

// Element type of an array
type ElementType<T> = T extends Array<infer U> ? U : never;

const numberArray = [1, 2, 3];

type NumberArrayElement = ElementType<typeof numberArray>;
const firstElement: NumberArrayElement = numberArray[0];

// parameters type of a function
type ParametersType<T> = T extends (...args: infer P) => any ? P : never;

function add(a: number, b: number) {
  return a + b;
}

type AddFunctionParams = ParametersType<typeof add>;
const params: AddFunctionParams = [1, 2];
