function Controller() {
    this.initialiseSea();
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
            // viewport.style.backgroundImage = viewport.style.backgroundImage === bgImg0 ? viewport.style.backgroundImage = bgImg1 : viewport.style.backgroundImage = bgImg0;
        }, 1000);
    },

    renderPorts(ports) {
        const portsElement = document.querySelector("#ports");
        portsElement.style.width = "0px";
        let width = 0;
        ports.forEach((port, index) => {
            width += 256;
            portsElement.style.width = `${width}px`;
            const portElement = document.createElement("div");
            portElement.classList.add("port");
            portElement.dataset.portName = port.name;
            portElement.dataset.portIndex = index;
            portsElement.append(portElement);
        });
    },

    renderShip(ship) {
        const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const currentPortElement = document.querySelector(`[data-port-index="${portIndex}"]`);
        const shipElement = document.querySelector("#ship");
        shipElement.style.top = currentPortElement.offsetTop + currentPortElement.offsetHeight + 'px';
        shipElement.style.left = currentPortElement.offsetLeft - (shipElement.offsetWidth / 4) + 'px';
    }

}