type AnimeAbbreviations = "fmab" | "hxh" | "opm" | "tg" | "mha" | "aot";

// Conditionally checking union string types automatically loop over each string
type RemoveAOT<String extends string> = String extends "aot" ? never : String;

type NewAnimeAbbreviations = RemoveAOT<AnimeAbbreviations>; // Result: "fmab" | "hxh" | "opm" | "tg" | "mha"

type Example = {
  a: number;
  b: string;
  c: boolean;
};

type Transformed = {
  [K in keyof Example]: Example[K];
}[keyof Example];
