import { describe, expect, it } from "vitest";
import { switchHourFormat } from "../../utils/switchHourFormat";

describe("Switch hour format 24h - AM/PM", () => {
    it("shoud transform 2 to 2", () => {
        expect(switchHourFormat(true,2)).toEqual(2);
    });

    it("shoud transform 20 to 8", () => {
        expect(switchHourFormat(false,20)).toEqual(8);
    });

    it("shoud transform 13 to 1", () => {
        expect(switchHourFormat(false,1)).toEqual(1);
    });
}); 