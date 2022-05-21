var table = document.getElementById("table");


function addCell(e) {
    var cell = document.createElement("div");
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
    e.electrons.forEach(n => {
        var electron = document.createElement("li");
        electron.textContent = n;
        electrons.appendChild(electron);
    });
    cell.appendChild(electrons);


    table.appendChild(cell);
}
tableElements.forEach(tableElement => {
    addCell(tableElement);
})