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


class Port {
    constructor(name) {
        this.name = name;
    }
}

module.exports = { 
    Ship,
    Port 
};