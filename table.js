var table = document.getElementById("table");

function addCell(e) {
    var cell = document.createElement("div");
    if (e.type === "element") {
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
    } else if (e.type === "empty") {} else if (e.type === "lan") {
        cell.classList.add("cell", "left", e.color);
        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);
    } else if (e.type === "act") {
        cell.classList.add("cell", "left", e.color);
        var index = document.createElement("div");
        index.classList.add("index");
        index.textContent = e.index;
        cell.appendChild(index);

        var name = document.createElement("div");
        name.classList.add("name");
        name.textContent = e.name;
        cell.appendChild(name);
    }

    table.appendChild(cell);
}
tableElements.forEach((tableElement) => {
    addCell(tableElement);
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