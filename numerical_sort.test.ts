import { assertEquals } from "jsr:@std/assert/equals";
import { num_sort } from "./numerical_sort.ts";

const getData = (): number[] => [5, 2, 1, 3, 6, 4, 10, 9, 8, 7];

Deno.test("sort array numerically", () => {
    const exp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const res = num_sort(getData());
    assertEquals(exp, res);
});
