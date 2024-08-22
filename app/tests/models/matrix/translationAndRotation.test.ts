import { describe, expect, it } from "vitest";
import { Matrix } from "../../../models/Matrix";

describe("Translation and Rotation", () => {
    it("should get translation matrix", () => {
        expect(Matrix.translation(2, 3)).toEqual([[1, 0, 2], [0, 1, 3], [0, 0, 1]]);
    });

    it("should get rotation matrix 30°", () => {
        const angle = Math.PI / 6;
        expect(Matrix.rotation(30)).toEqual([[Math.cos(angle), Math.sin(angle), 0], [-Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]]);
    });

    it("should get rotation matrix for 90°", () => {
        const angle = Math.PI / 2;
        expect(Matrix.rotation(90)).toEqual([[Math.cos(angle), Math.sin(angle), 0], [-Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]]);
    });

    it("should get rotation matrix for 180°", () => {
        const angle = Math.PI;
        expect(Matrix.rotation(180)).toEqual([[Math.cos(angle), Math.sin(angle), 0], [-Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]]);
    });

});
