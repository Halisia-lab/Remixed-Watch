import { describe, expect, it } from "vitest";
import { getCorrectHour } from "../../utils/getCorrectHour";

describe("Put an hour in the right format and timezone", () => {
    it("should return 12h", () => {
        expect(getCorrectHour(11, 1)).toEqual(12);
    });

    it("should return 18", () => {
        expect(getCorrectHour(18, 0)).toEqual(18);
    });

    it("should return 00h", () => {
        expect(getCorrectHour(23, 1)).toEqual(0);
    });

    it("should return 00h", () => {
        expect(getCorrectHour(22, 2)).toEqual(0);
    });

    it("should return 00h", () => {
        expect(getCorrectHour(22, 1)).toEqual(23);
    });
});

