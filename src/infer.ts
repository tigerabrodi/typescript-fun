type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string) {
  return `Hello, ${name}`;
}

type GreetingReturnType = ReturnTypeOf<typeof greet>;
const greeting: GreetingReturnType = greet("Alice");
