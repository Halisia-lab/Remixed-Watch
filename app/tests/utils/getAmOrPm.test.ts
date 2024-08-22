import { describe, expect, it } from "vitest";
import { getAmOrPm } from "../../utils/getAmOrPm";

describe("", () => {
    it("shoud transform 2 to 2", () => {
        expect(getAmOrPm(2)).toEqual("AM");
    });

    it("shoud transform 20 to 8", () => {
        expect(getAmOrPm(20)).toEqual("PM");
    });

    it("shoud transform 13 to 1", () => {
        expect(getAmOrPm(0)).toEqual("AM");
    });
}); 