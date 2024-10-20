import { assertEquals } from "jsr:@std/assert/equals";
import { even, negative, odds, positive } from "./filter.ts";

const provider1 = (): number[] => [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
Deno.test("remove negative values from array", () => {
    const exp = [2, 3, 4, 6, 7, 9, 10];
    const res = negative(provider1());
    assertEquals(exp, res);
});

Deno.test("remove positive values from array", () => {
    const exp = [-1, -5, -8];
    const res = positive(provider1());
    assertEquals(exp, res);
});

Deno.test("remove odds values from array", () => {
    const exp = [-1, 3, -5, 7, 9];
    const res = odds(provider1());
    assertEquals(exp, res);
});

Deno.test("remove even values from array", () => {
    const exp = [2, 4, 6, -8, 10];
    const res = even(provider1());
    assertEquals(exp, res);
});
