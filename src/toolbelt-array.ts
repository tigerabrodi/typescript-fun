type Append<T extends any[], U> = [...T, U];

type Prepend<T extends any[], U> = [U, ...T];

type Concat<T extends any[], U extends any[]> = [...T, ...U];

type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T;

// Example usages
type TestAppend = Append<[1, 2, 3], 4>; // Result: [1, 2, 3, 4]
type TestPrepend = Prepend<[2, 3, 4], 1>; // Result: [1, 2, 3, 4]
type TestConcat = Concat<[1, 2], [3, 4]>; // Result: [1, 2, 3, 4]

type TestReverse = Reverse<[1, 2, 3]>;
// type TestLength = Length<[1, 2, 3, 4, 5]>;
// type TestIncludes = Includes<[1, 2, 3, 4, 5], 3>;
// type TestFlatten = Flatten<[[1, 2], [3, 4], 5]>;
