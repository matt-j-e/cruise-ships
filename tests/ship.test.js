const Ship = require("../src/ship.js");

function shipInit() {
    const port = "Dover";
    const ship = new Ship(port);
    return ship;
}
beforeEach(() => ship = shipInit());

describe("Ship object", () => {
    it("is an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a startPort property", () => {
        expect(ship.startPort).toBe("Dover");
    });
});