import { describe, expect, it } from "vitest";
import {Matrix} from "../../../models/Matrix";

describe("Inverse", () => {
    it("should transpose matrix", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]])
        expect(matrix.transpose()).toEqual([[1,0,5],[2,1,6],[3,4,0]]);
    });

    it("should get Adj matrix", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]])
        const transposedMatrix = new Matrix(3,3, matrix.transpose());
        expect(transposedMatrix.getAdjMatrix()).toEqual([[-24,18,5],[20,-15,-4],[-5,4,1]]);
    });

    it("should get inversed matrix", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]])
        expect(matrix.getInverse()).toEqual([[-24,18,5],[20,-15,-4],[-5,4,1]]);
    }); 
});