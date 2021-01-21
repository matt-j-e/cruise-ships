class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
    }

    setSail() {
        this.currentPort = null;
    }
}

module.exports = Ship;