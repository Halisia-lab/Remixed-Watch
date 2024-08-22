import { describe, expect, it } from "vitest";
import { Matrix } from "../../../models/Matrix";

describe("Multiply Matrix", () => {
    it("should multiply by 2 ", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]])
        expect(matrix.muliplyWithNumber(2)).toEqual(([[2,4,6],[0,2,8],[10,12,0]]));
    });

    it("should multiply by matrix", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]]);
        const otherMatrix = new Matrix(3,3,[[2,1,3],[0,2,2],[1,3,1]]);
        expect(matrix.multiplyMatrix(otherMatrix)).toEqual([[5,14,10],[4,14,6],[10,17,27]]);
    });

    it("should multiply by vector", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]]);
        const vector = [1,2,2]
        expect(matrix.multiplyVector(vector)).toEqual([11,10,17]);
    });

    it("should get null", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]]);
        const otherMatrix = new Matrix(2,2,[[2,1],[0,2]]);
        expect(matrix.multiplyMatrix(otherMatrix)).toEqual(null);
    });
}); 
// 