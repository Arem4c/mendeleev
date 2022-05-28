var table = document.getElementById("table");
var actin = document.getElementById("actin");
var lant = document.getElementById("lant");

function addCellLant(e) {}

function addCellAct(e) {}

function addCell(e) {
    var cell = null;
    if (e.type === "element") {
        cell = document.createElement("div");
        cell.classList.add("cell", e.side, e.color);

        var symbol = document.createElement("div");
        symbol.classList.add("symbol");
        symbol.textContent = e.symbol;
        cell.appendChild(symbol);

        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);

        var mass = document.createElement("div");
        mass.classList.add("mass");
        mass.textContent = e.mass;
        cell.appendChild(mass);

        var electrons = document.createElement("ul");
        electrons.classList.add("electrons");
        e.electrons.forEach((n) => {
            var electron = document.createElement("li");
            electron.textContent = n;
            electrons.appendChild(electron);
        });
        cell.appendChild(electrons);
        table.appendChild(cell);
    } else if (e.type === "empty") {
        cell = document.createElement("div");
        table.appendChild(cell);
    } else if (e.type === "lan") {
        cell = document.createElement("div");
        cell.classList.add("cell", "left", e.color);
        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);
        table.appendChild(cell);
    } else if (e.type === "act") {
        cell = document.createElement("div");
        cell.classList.add("cell", "left", e.color);
        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);
        table.appendChild(cell);
    } else if (e.type === "lantanoid") {
        cell = document.createElement("div");
        cell.classList.add("cell", e.side, e.color);

        var symbol = document.createElement("div");
        symbol.classList.add("symbol");
        symbol.textContent = e.symbol;
        cell.appendChild(symbol);

        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);

        var mass = document.createElement("div");
        mass.classList.add("mass");
        mass.textContent = e.mass;
        cell.appendChild(mass);

        var electrons = document.createElement("ul");
        electrons.classList.add("electrons");
        e.electrons.forEach((n) => {
            var electron = document.createElement("li");
            electron.textContent = n;
            electrons.appendChild(electron);
        });
        cell.appendChild(electrons);
        lant.appendChild(cell);
    } else if (e.type === "actinoid") {
        cell = document.createElement("div");
        cell.classList.add("cell", e.side, e.color);

        var symbol = document.createElement("div");
        symbol.classList.add("symbol");
        symbol.textContent = e.symbol;
        cell.appendChild(symbol);

        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);

        var mass = document.createElement("div");
        mass.classList.add("mass");
        mass.textContent = e.mass;
        cell.appendChild(mass);

        var electrons = document.createElement("ul");
        electrons.classList.add("electrons");
        e.electrons.forEach((n) => {
            var electron = document.createElement("li");
            electron.textContent = n;
            electrons.appendChild(electron);
        });
        cell.appendChild(electrons);
        actin.appendChild(cell);
    } else if (e.type === "title") {
        cell = document.createElement("div");
        cell.classList.add("cell", "title", e.color);
        if (e.span) cell.classList.add(e.span);
        var name = document.createElement("div");
        name.textContent = e.name;
        cell.appendChild(name);
        table.appendChild(cell);
    }
    if (cell != null) {
        cell.addEventListener("click", function(ev) {
            console.log(ev.target, e);
        });
    }
    if (e.symbol === "Ge") {
        cell.classList.add("details");
    }
}
tableElements.forEach((tableElement) => {
    addCell(tableElement);
    addCellLant(tableElement);
    addCellAct(tableElement);
});

var txt = document.getElementById("txt");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

function log() {
    txt.value = "var tableElements =" + JSON.stringify(tableElements);
}
btn1.addEventListener("click", function() {
    log();
});
btn2.addEventListener("click", function() {
    tableElements.forEach((tableElement) => {
        tableElement.type = "element";
    });
    log();
});