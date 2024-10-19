import { assertEquals } from "jsr:@std/assert/equals";
import { checkPalindrome } from "./check_palindrome.ts";

const getData = (): [string[], boolean[]] => [
    ["DAD", "Dad", "ABCDCBA", "ABCDcba"],
    [true, false, true, false],
];

Deno.test("check if is palindrome", () => {
    const [inp, exp] = getData();
    for (let i = 0; i < inp.length; i++) {
        assertEquals(exp[i], checkPalindrome(inp[i]));
    }
});
