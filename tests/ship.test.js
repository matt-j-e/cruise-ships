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
// beforeEach(() => {
//     const dover = new Port("Dover");
//     const calais = new Port("Calais");
//     const itinerary = new Itinerary([dover, calais]);
//     const ship = new Ship(itinerary);
//     console.log(ship);
// });

describe("Ship object", () => {
    
    it("can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a currentPort property", () => {
        expect(ship.currentPort).toBe(dover);
    });

    it("gets added to currentPort on instantiation", () => {
        expect(ship.currentPort.ships).toContain(ship);
    });

    it("has a previousPort property set to null", () => {
        expect(ship.previousPort).toBeNull();
    });
});

describe("setSail", () => {
    it("can set sail from a port", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
        expect(ship.previousPort.ships).not.toContain(ship);
    });

    it("throws an error when trying to set sail for an undefined port", () => {
        ship.currentPort = calais;
        expect(() => ship.setSail()).toThrow("This is the end of the itinerary");
    });
});

describe("dock", () => {
    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(ship.currentPort.ships).toContain(ship);
    });
});