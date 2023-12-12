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

type NestedArray = number[][];
type FlatArray = Flatten<NestedArray>;
const flat: FlatArray = [1, 2, 3];

export {};

// FunctionProperties
type FunctionProperties<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

const myObjectWithPropsAndMethods = {
  myProp: "test",
  myMethod: (x: number) => "test",
};

type ClassMethods = FunctionProperties<typeof myObjectWithPropsAndMethods>;
const methods: ClassMethods = { myMethod: (x: number) => "test" }; // Result: { myMethod: (x: number) => string }

// ArgumentsToTuple
type ArgumentsToTuple<T> = T extends (...args: infer P) => any ? [...P] : never;

function exampleFunction(a: number, b: string, c: boolean): void {}

type ExampleFunctionArguments = ArgumentsToTuple<typeof exampleFunction>;
const argsTuple: ExampleFunctionArguments = [1, "test", true];

type NestedPropertyType<T, P extends Array<any>> = P extends [
  infer K,
  ...infer Rest
]
  ? K extends keyof T
    ? NestedPropertyType<T[K], Rest>
    : T
  : T;

// Usage
type ExampleType = { a: { b: { c: number } } };
type Path = ["a", "b", "c"];

type ResultType = NestedPropertyType<ExampleType, Path>; // Result: number
const result: ResultType = 22;
