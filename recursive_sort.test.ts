import { assertEquals } from "jsr:@std/assert/equals";
import { sortRecursive } from "./recursive_sort.ts";

Deno.test("sort array recursively", () => {
    const exp = [2, 5, 7, 8, 9, 14];
    const res = sortRecursive([5, 2, 9, 7, 14, 8], 0);
    assertEquals(exp, res);
});
