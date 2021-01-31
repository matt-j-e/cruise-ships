class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.finalPortIndex = itinerary.ports.length - 1;
        this.currentPort = itinerary.ports[0];
        this.currentPort.addShip(this);
        this.previousPort = null;
    }

    setSail() {
        const ports = this.itinerary.ports;
        if (ports.indexOf(this.currentPort) === this.finalPortIndex) {
            throw new Error("This is the end of the itinerary");
        }
        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.previousPort.removeShip(this);
    }

    dock() {
        const itinerary = this.itinerary;
        const prevPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[prevPortIndex + 1];
        this.currentPort.addShip(this);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
} else {
    window.Port = Ship;
}