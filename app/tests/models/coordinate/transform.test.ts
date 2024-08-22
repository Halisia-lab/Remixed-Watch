import { describe, expect, it } from "vitest";
import { Coordinates } from "../../../models/Coordinates";

describe("Transform Matrix", () => {
    it("should transform coordinates with 2 ", () => {
        const coordinates = new Coordinates(1, 2);
       const newCoordinates =  coordinates.transform(2);
        expect(newCoordinates.x).toEqual(3);
        expect(newCoordinates.y).toEqual(4);
    })
}); 