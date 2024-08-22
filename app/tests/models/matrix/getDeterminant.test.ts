import { describe, expect, it } from "vitest";
import {Matrix} from "../../../models/Matrix";

describe("Calculate 2D determinant", () => {
    it("shoud get -34 ", () => {
        const matrix = new Matrix(2,2,[[4,7],[6,2]])
        expect(matrix.get2dDeterminant()).toEqual(-34);
    });

    it("should get null with wrong size", () => {
        const matrix = new Matrix(3,3,[[4,7,0],[6,2,3],[1,1,5]])
        expect(matrix.get2dDeterminant()).toEqual(null);
    });
}); 

describe("Calculate 3D determinant", () => {
    it("should get 74", () => {
        const matrix = new Matrix(3,3,[[1,5,3],[2,4,7],[4,6,2]])
        expect(matrix.get3dDeterminant()).toEqual(74);
    });
 
    it("should get 1", () => {
        const matrix = new Matrix(3,3,[[1,2,3],[0,1,4],[5,6,0]])
        expect(matrix.get3dDeterminant()).toEqual(1);
    });


    it("should get null with wrong size", () => {
        const matrix = new Matrix(2,2,[[1,5],[2,4]])
        expect(matrix.get3dDeterminant()).toEqual(null);
    });
}); 

