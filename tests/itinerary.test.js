const Itinerary = require("../src/itinerary.js");

describe("Itinerary", () => {
    it("can be instantiated", () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it("has a ports property", () => {
        const itinerary = new Itinerary(["a", "b"]);
        expect(itinerary.ports).not.toBeUndefined();
    });
});