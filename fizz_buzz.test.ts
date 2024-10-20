import { assertEquals } from "jsr:@std/assert/equals";
import { fizzBuzz } from "./fizz_buzz.ts";

Deno.test("Calculate FizzBuzz", () => {
    const exp =
        "1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\n";
    const res = fizzBuzz(20, 3, 5);
    assertEquals(exp, res);
});
