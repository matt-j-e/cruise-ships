class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
    }

    setSail() {
        this.currentPort = null;
    }

    dock(port) {
        this.currentPort = port;
    }
}


module.exports = Ship;