/* globals describe it expect */
const Ship = require("../src/ship.js");

function shipInit() {
    const port = "Dover";
    const ship = new Ship(port);
    return ship;
}
beforeEach(() => ship = shipInit());

describe("Ship object", () => {
    it("can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a startPort property", () => {
        expect(ship.currentPort).toBe("Dover");
    });
});

describe("setSail", () => {
    it("can set sail from a port", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});