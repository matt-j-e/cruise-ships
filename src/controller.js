function Controller(ship) {
    this.initialiseSea();
    this.ship = ship;

    const currentPort = this.ship.itinerary.ports[0].name;
    const nextPort = this.ship.itinerary.ports[1].name;
    const currentMessage = `Current Port: ${currentPort}`;
    const nextMessage = `Next Port: ${nextPort}`;
    this.renderHeadsUp(currentMessage, nextMessage);

    document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
    });
}

Controller.prototype = {

    initialiseSea() {
        const viewport = document.querySelector("#viewport");
        const bgImg0 = 'url("images/water0.png")';
        const bgImg1 = 'url("images/water1.png")';
        viewport.style.backgroundImage = bgImg0;
        setInterval(() => {
            if (viewport.style.backgroundImage === bgImg0) {
                viewport.style.backgroundImage = bgImg1;
            } else {
                viewport.style.backgroundImage = bgImg0;
            }
        }, 1000);
    },

    renderPorts() {
        const portsElement = document.querySelector("#ports");
        portsElement.style.width = "0px";
        let width = 0;
        this.ship.itinerary.ports.forEach((port, index) => {
            width += 256;
            portsElement.style.width = `${width}px`;
            const portElement = document.createElement("div");
            portElement.classList.add("port");
            portElement.dataset.portName = port.name;
            portElement.dataset.portIndex = index;
            portsElement.append(portElement);
        });
    },

    renderShip() {
        const portIndex = this.ship.itinerary.ports.indexOf(ship.currentPort);
        const currentPortElement = document.querySelector(`[data-port-index="${portIndex}"]`);
        const shipElement = document.querySelector("#ship");
        shipElement.style.top = currentPortElement.offsetTop + currentPortElement.offsetHeight + 'px';
        shipElement.style.left = currentPortElement.offsetLeft - (shipElement.offsetWidth / 4) + 'px';
    },

    setSail() {
        const currentPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
        if (currentPortIndex === this.ship.finalPortIndex) {
            this.renderMessage("You are at the end of your cruise");
            return;
        }
        const shipElement = document.querySelector("#ship");
        const nextPortElement = document.querySelector(`[data-port-index="${currentPortIndex + 1}"]`);
        const nextLeft = nextPortElement.offsetLeft - (shipElement.offsetWidth / 4);
        this.renderMessage(`Now departing ${this.ship.currentPort.name}`);
        const currentMessage = `Last Port: ${this.ship.currentPort.name}`;
        const nextMessage = `Next Port: ${this.ship.itinerary.ports[currentPortIndex + 1].name}`;
        this.renderHeadsUp(currentMessage, nextMessage);
        this.ship.setSail();
        const sailing = setInterval(() => {
            if (parseInt(shipElement.style.left) === nextLeft) {
                this.ship.dock();
                clearInterval(sailing);
                this.renderMessage(`Arrived at ${this.ship.currentPort.name}`);
                const currentMessage = `Current Port: ${this.ship.currentPort.name}`;
                const currentPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
                let nextMessage;
                if (currentPortIndex === this.ship.finalPortIndex) {
                    nextMessage = "Next Port: n/a";
                } else {
                    nextMessage = `Next Port: ${this.ship.itinerary.ports[currentPortIndex + 1].name}`;
                }
                this.renderHeadsUp(currentMessage, nextMessage);
                return;
            } else {
                shipElement.style.left = parseInt(shipElement.style.left) + 1 + "px";
            }
        }, 20);
    },

    renderMessage(msg) {
        const message = document.createElement("div");
        message.setAttribute("id", "message");
        message.innerHTML = msg;
        const viewport = document.querySelector("#viewport");
        viewport.appendChild(message);
        const removeMsg = setInterval(() => {
            viewport.removeChild(message);
            clearInterval(removeMsg);
        }, 2000);
        
    },

    renderHeadsUp(currentMsg, nextMsg) {
        const headsUpCurrentElement = document.querySelector(".current");
        const headsUpNextElement = document.querySelector(".next");
        headsUpCurrentElement.innerHTML = currentMsg;
        headsUpNextElement.innerHTML = nextMsg;
    }

}