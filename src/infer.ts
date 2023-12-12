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

// Promise value of a promise
type PromiseValueType<T> = T extends Promise<infer U> ? Awaited<U> : never;

// Usage (should initially fail)
async function fetchData() {
  return "Data";
}

type FetchedDataType = PromiseValueType<ReturnType<typeof fetchData>>;
const fetchedData: FetchedDataType = await fetchData();

// Flatten
type Flatten<T> = T extends Array<infer U> ? U : never;

// Usage (should initially fail)
type NestedArray = number[][];
type FlatArray = Flatten<NestedArray>; // Fix this type
const flat: FlatArray = [1, 2, 3];

export {};
