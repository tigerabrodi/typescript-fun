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
