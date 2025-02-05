import { assertEquals } from "jsr:@std/assert/equals";
import { rec_array, rec_sum, red_array } from "./sum.ts";

Deno.test("sum numbers to max recursively", () => {
    const exp: number = 1;
    const res: number = rec_sum(1, 0);
    assertEquals(exp, res);
});

Deno.test("sum array values to key", () => {
    const exp: number = 36;
    const res: number = rec_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 0);
    assertEquals(exp, res);
});

const provider3 = (): [number[][], number[]] => [
    [
        [1, 2, 3, 4, 5],
        [-5, -12, 23, 62, -100, 71],
    ],
    [15, 39],
];
Deno.test("Sum an array", () => {
    const [inp, exp] = provider3();
    for (let i = 0; i < inp.length; i++) {
        assertEquals(exp[i], red_array(inp[i]));
    }
});
