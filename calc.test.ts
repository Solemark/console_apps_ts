import { assertEquals } from "jsr:@std/assert";
import { add, div, mul, sub } from "./calc.ts";

const getData = (): number[][] => [
    [5, 5],
    [5, -5],
    [-5, -5],
];

Deno.test("add y to x", () => {
    getData().forEach((item) => {
        assertEquals(item[0] + item[1], add(item[0], item[1]));
    });
});

Deno.test("subract y from x", () => {
    getData().forEach((item) => {
        assertEquals(item[0] - item[1], sub(item[0], item[1]));
    });
});

Deno.test("multiply x by y", () => {
    getData().forEach((item) => {
        assertEquals(item[0] * item[1], mul(item[0], item[1]));
    });
});

Deno.test("divide y by x", () => {
    getData().forEach((item) => {
        assertEquals(item[0] / item[1], div(item[0], item[1]));
    });
});
