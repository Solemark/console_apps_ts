import { assertEquals } from "jsr:@std/assert/equals";
import { even, negative, odds, positive } from "./filter.ts";

Deno.test("remove negative values from array", () => {
    const a1 = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
    assertEquals([2, 3, 4, 6, 7, 9, 10], negative(a1));
});

Deno.test("remove positive values from array", () => {
    const a1 = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
    assertEquals([-1, -5, -8], positive(a1));
});

Deno.test("remove odds values from array", () => {
    const a1 = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
    assertEquals([-1, 3, -5, 7, 9], odds(a1));
});

Deno.test("remove even values from array", () => {
    const a1 = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
    assertEquals([2, 4, 6, -8, 10], even(a1));
});
