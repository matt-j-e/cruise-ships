/* globals describe it expect */
const {
    Ship,
    Port
} = require("../src/ship.js");

describe("Port", () => {
    it("can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it("has a name property", () => {
        const port = new Port("Nice");
        expect(port.name).toBeTruthy();
    });
});