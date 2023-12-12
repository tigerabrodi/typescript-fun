type Split<
  S extends string,
  Delimiter extends string
> = S extends `${infer FirstPart}${Delimiter}${infer SecondPart}`
  ? [FirstPart, SecondPart]
  : never;

// Example usages
type TestSplit = Split<"hello-world", "-">; // Result: ['hello', 'world']

// type TestReplace = Replace<'TypeScript', 'Script', 'Toolbelt'>;
// type TestLength = Length<'hello'>;
// type TestIncludes = Includes<'hello world', 'world'>;
// type TestUpperCase = UpperCase<'typescript'>;
// type TestLowerCase = LowerCase<'TYPESCRIPT'>;
// type TestStartsWith = StartsWith<'hello world', 'hello'>;
// type TestEndsWith = EndsWith<'hello world', 'world'>;
