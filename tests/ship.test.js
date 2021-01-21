/* globals describe it expect */
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

function shipInit() {
    const port = new Port("Dover");
    const ship = new Ship(port);
    return ship;
}
beforeEach(() => ship = shipInit());

describe("Ship object", () => {
    it("can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a startPort property", () => {
        expect(ship.currentPort.name).toBe("Dover");
    });
});

describe("setSail", () => {
    it("can set sail from a port", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});

describe("dock", () => {
    it("can dock at a port", () => {
        ship.setSail();
        const newPort = new Port("Nice");
        ship.dock(newPort);
        expect(ship.currentPort).toBe(newPort);
    });
});