/* globals describe it expect */
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

const dover = new Port("Dover");
const calais = new Port("Calais");
const itinerary = new Itinerary([dover, calais]);

function shipInit() {
    const ship = new Ship(itinerary);
    return ship;
}
beforeEach(() => ship = shipInit());

describe("Ship object", () => {
    it("can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a currentPort property", () => {
        expect(ship.currentPort.name).toBe("Dover");
    });

    it("has a previousPort property set to null", () => {
        expect(ship.previousPort).toBeNull();
    });
});

describe("setSail", () => {
    it("can set sail from a port", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort.name).toBe("Dover");
    });
});

describe("dock", () => {
    it("can dock at a different port", () => {
        ship.setSail();
        // const newPort = new Port("Nice");
        ship.dock();
        expect(ship.currentPort).toBe(itinerary.ports[1]);
    });
});