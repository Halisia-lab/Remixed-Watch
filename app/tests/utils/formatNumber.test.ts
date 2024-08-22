import { describe, expect, it } from "vitest";
import { formatNumber } from "../../utils/formatNumber";

describe("Format single numbers", () => {
    it("shoud transform 2 to 02", () => {
        expect(formatNumber(2)).toEqual("02");
    });

    it("shoud transform 21 to 21", () => {
        expect(formatNumber(21)).toEqual("21");
    });

    it("shoud transform 10 to 10", () => {
        expect(formatNumber(10)).toEqual("10");
    });
}); 

