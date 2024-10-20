import { assertEquals } from "jsr:@std/assert";
import { add, div, mul, sub } from "./calc.ts";

const getData = (): number[][] => [
    [5, 5],
    [5, -5],
    [-5, -5],
];

Deno.test("add y to x", () => {
    getData().forEach((item) => {
        const exp = item[0] + item[1];
        const res = add(item[0], item[1]);
        assertEquals(exp, res);
    });
});

Deno.test("subract y from x", () => {
    getData().forEach((item) => {
        const exp = item[0] - item[1];
        const res = sub(item[0], item[1]);
        assertEquals(exp, res);
    });
});

Deno.test("multiply x by y", () => {
    getData().forEach((item) => {
        const exp = item[0] * item[1];
        const res = mul(item[0], item[1]);
        assertEquals(exp, res);
    });
});

Deno.test("divide y by x", () => {
    getData().forEach((item) => {
        const exp = item[0] / item[1];
        const res = div(item[0], item[1]);
        assertEquals(exp, res);
    });
});
