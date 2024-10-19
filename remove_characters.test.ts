import { assertEquals } from "jsr:@std/assert/equals";
import { removeCharacters, removeSpaces } from "./remove_characters.ts";

Deno.test("remove select characters from string", () => {
    const s = "Hello! My name is Timmy Testing!";
    const letters = ["m", "!", " ", "t"];
    assertEquals("Helloynaeisiyesing", removeCharacters(s, letters));
});

Deno.test("remove select characters from string", () => {
    const str: string = "Hello  world!    How     are      you      today?";
    assertEquals("Helloworld!Howareyoutoday?", removeSpaces(str));
});
