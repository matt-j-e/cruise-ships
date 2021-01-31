function Controller() {
    this.initialiseSea();
}

Controller.prototype.initialiseSea = function() {
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
}

Controller.prototype.renderPorts = function(ports) {
    const portsElement = document.querySelector("#ports");
    portsElement.style.width = "0px";
    let width = 0;
    ports.forEach((port, index) => {
        width += 256;
        portsElement.style.width = `${width}px`;
        const portElement = document.createElement("div");
        portElement.classList.add("port");
        portElement.dataset.index = index;
        portsElement.append(portElement);
    });
}