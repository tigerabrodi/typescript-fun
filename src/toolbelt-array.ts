type Append<T extends any[], U> = [...T, U];

type Prepend<T extends any[], U> = [U, ...T];

type Concat<T extends any[], U extends any[]> = [...T, ...U];

// Example usages
type TestAppend = Append<[1, 2, 3], 4>;
type TestPrepend = Prepend<[2, 3, 4], 1>;
type TestConcat = Concat<[1, 2], [3, 4]>;
// type TestReverse = Reverse<[1, 2, 3]>;
// type TestLength = Length<[1, 2, 3, 4, 5]>;
// type TestIncludes = Includes<[1, 2, 3, 4, 5], 3>;
// type TestFlatten = Flatten<[[1, 2], [3, 4], 5]>;
