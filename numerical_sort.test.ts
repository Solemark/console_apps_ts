import { assertEquals } from "jsr:@std/assert/equals";
import { num_sort } from "./numerical_sort.ts";

Deno.test("sort array numerically", () => {
    const a1 = [5, 2, 1, 3, 6, 4, 10, 9, 8, 7];
    assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], num_sort(a1));
});
