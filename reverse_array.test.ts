import { assertEquals } from "jsr:@std/assert/equals";
import { same_arr } from "./reverse_array.ts";

const provider1 = (): number[][] => [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
Deno.test("reverse array with single array", () => {
    provider1().forEach((item) => {
        const exp = item.toReversed();
        const res = same_arr(item);
        assertEquals(exp, res);
    });
});
