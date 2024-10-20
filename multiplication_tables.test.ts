import { assertEquals } from "jsr:@std/assert/equals";
import { outputTable } from "./multiplication_tables.ts";

const provider1 = (): [number[], string[]] => [
    [1, 5, 9, 10, 12],
    [
        "1 x 0 = 0\n1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10\n1 x 11 = 11\n1 x 12 = 12",
        "5 x 0 = 0\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n5 x 11 = 55\n5 x 12 = 60",
        "9 x 0 = 0\n9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90\n9 x 11 = 99\n9 x 12 = 108",
        "10 x 0 = 0\n10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100\n10 x 11 = 110\n10 x 12 = 120",
        "12 x 0 = 0\n12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120\n12 x 11 = 132\n12 x 12 = 144",
    ],
];
Deno.test("Calculate multiplication tables", () => {
    const [inp, exp] = provider1();
    for (let i = 0; i < inp.length; i++) {
        assertEquals(exp[i], outputTable(inp[i], 12));
    }
});
