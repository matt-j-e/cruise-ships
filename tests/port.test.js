/* globals describe it expect */
const Port = require("../src/port.js");

describe("Port", () => {
    it("can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it("has a name property", () => {
        const port = new Port("Nice");
        expect(port.name).toBeTruthy();
    });
});

describe("addShip", () =>{
    it("adds a ship to the Port's ships array", () => {
        const dover = new Port("Dover");
        const ship = jest.fn();
        dover.addShip(ship);
        expect(dover.ships).toContain(ship);
    });
});

describe("removeShip", () => {
    it("removes a ship from the Port's ships array", () =>{
        const dover = new Port("Dover");
        const pequod = jest.fn();
        const hispaniola = jest.fn();
        dover.addShip(pequod);
        dover.addShip(hispaniola);
        dover.removeShip(pequod);
        expect(dover.ships).toEqual([hispaniola]);
    });
});

