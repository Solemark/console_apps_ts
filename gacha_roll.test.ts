import { gachaRoll } from "./gacha_roll.ts";
import { assertStringIncludes } from "jsr:@std/assert/string-includes";

const provider1 = () => ["FGO", "AK", "GI"];
Deno.test("Check the roll succeeded", () => {
    provider1().forEach((game) => {
        assertStringIncludes(gachaRoll(game), game);
    });
});
