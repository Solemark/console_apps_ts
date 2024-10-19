import { assertEquals } from "jsr:@std/assert/equals";
import { fizzBuzz } from "./fizz_buzz.ts";

Deno.test("Calculate FizzBuzz", () => {
    const max: number = 20;
    const fizz: number = 3;
    const buzz: number = 5;
    assertEquals(
        "1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\n",
        fizzBuzz(max, fizz, buzz),
    );
});
