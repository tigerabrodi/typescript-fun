type OmitDuplicate<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude becomes `Exclude<"myProp" | "myMethod" | "lmao" | "lol" | "hihi", "myMethod" | "myProp">`
 * This returns `"lmao" | "lol" | "hihi"`
 */

/**
 * Pick becomes `Pick<{
 *	myProp: "test",
 *	myMethod: (x: number) => "test",
 *      lmao: "lmao",
 *     	lol: "lol",
 *     	hihi: "hihi",
 * }, "lmao" | "lol" | "hihi">`
 */

const myObject = {
  myProp: "test",
  myMethod: (x: number) => "test",
  lmao: "lmao",
  lol: "lol",
  hihi: "hihi",
};

type Omitted = OmitDuplicate<typeof myObject, "myMethod" | "myProp">;

const omitted: Omitted = {
  lmao: "lmao",
  lol: "lol",
  hihi: "hihi",
};
