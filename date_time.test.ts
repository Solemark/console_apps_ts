import { assertEquals } from "jsr:@std/assert/equals";
import { checkDay, checkTime, getCurrentTime } from "./date_time.ts";

Deno.test("get current datetime", () => {
    const date = new Date();
    let exp = "";
    exp += `day: ${checkDay(date.getDay())}\n`;
    exp += `date: ${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()}\n`;
    exp += `time: ${getCurrentTime(date)}`;
    assertEquals(exp, checkTime());
});
