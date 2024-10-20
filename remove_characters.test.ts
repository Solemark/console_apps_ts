import { assertEquals } from "jsr:@std/assert/equals";
import { removeCharacters, removeSpaces } from "./remove_characters.ts";

const provider1 = (): [string, string[]] => [
    "Hello! My name is Timmy Testing!",
    ["m", "!", " ", "t"],
];
Deno.test("remove select characters from string", () => {
    const [str, chs] = provider1();
    const exp: string = "Helloynaeisiyesing";
    const res: string = removeCharacters(str, chs);
    assertEquals(exp, res);
});

const provider2 = (): string =>
    "Hello  world!    How     are      you      today?";
Deno.test("remove spaces from string", () => {
    const str: string = provider2();
    const exp: string = "Helloworld!Howareyoutoday?";
    const res: string = removeSpaces(str);
    assertEquals(exp, res);
});
