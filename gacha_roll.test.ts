import { gachaRoll } from "./gacha_roll.ts";
import { assertStringIncludes } from "jsr:@std/assert/string-includes";

const getData = () => ["FGO", "AK", "GI"];

Deno.test("Check the roll succeeded", () => {
    getData().forEach((game) => {
        assertStringIncludes(gachaRoll(game), game);
    });
});
