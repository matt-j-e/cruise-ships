class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.portCount = 0;
        this.currentPort = this.itinerary.ports[this.portCount];
        this.previousPort = null;
    }

    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock() {
        this.portCount++;
        this.currentPort = this.itinerary.ports[this.portCount];
    }
}


module.exports = Ship;