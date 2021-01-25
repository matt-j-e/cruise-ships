class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        // this.portCount = 0;
        this.finalPortIndex = itinerary.ports.length - 1;
        this.currentPort = this.itinerary.ports[0];
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
        // this.portCount++;
        const ports = this.itinerary.ports;
        const prevPortIndex = ports.indexOf(this.previousPort);
        this.currentPort = ports[prevPortIndex + 1];
        this.currentPort.addShip(this);
    }
}


module.exports = Ship;