import { assertEquals } from "jsr:@std/assert/equals";
import { sortRecursive } from "./recursive_sort.ts";

Deno.test("sort array recursively", () => {
    assertEquals([2, 5, 7, 8, 9, 14], sortRecursive([5, 2, 9, 7, 14, 8], 0));
});
