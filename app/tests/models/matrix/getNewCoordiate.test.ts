import { describe, expect, it } from "vitest";
import { Matrix } from "../../../models/Matrix";

describe("new coordinates", () => {
    it("should get 13h/1h coordinates ", () => {
        const rotation = new Matrix(3,3,Matrix.rotation(30));
        const newCoordinate = rotation.multiplyVector([0,1,1]); //initial 12h coordinates
        expect(newCoordinate).toEqual([Math.sin(Math.PI/6), Math.cos(Math.PI/6),1]);
    });

    it("should get 15h/3h coordinates  ", () => {
         const rotation = new Matrix(3,3,Matrix.rotation(90));
         const newCoordinate = rotation.multiplyVector([0,1,1]); 
         expect(newCoordinate).toEqual([1,Math.cos(Math.PI/2),1]);
     });
 
     it("should get 21h coordinates after doing 15h + 6  ", () => {
         const rotation = new Matrix(3,3,Matrix.rotation(180));
         const newCoordinate = rotation.multiplyVector([1,0,1]); //initial 15h coordinates
         expect(newCoordinate).toEqual([Math.cos(Math.PI),-Math.sin(Math.PI),1]);
     });
});

