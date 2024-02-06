function createMenuContent() {
    const header = document.createElement("h2");
    const list = document.createElement("ul");
    const item1 = document.createElement("li");
    const item2 = document.createElement("li");
    const item3 = document.createElement("li");
    const item4 = document.createElement("li");

    header.textContent = "Tasting menu - £999";
    document.getElementById("content").appendChild(header);

    item1.textContent = "Caviar & Oysters Appetizer";
    document.getElementById("content").appendChild(item1);

    item2.textContent = "Liquidized Broccoli & Cheese Soup";
    document.getElementById("content").appendChild(item2);

    item3.textContent = "Filet Mignon on a Bed of Chili Magma and a side of Atomized Potato Paste";
    document.getElementById("content").appendChild(item3);

    item4.textContent = "Cloud of Whipped Lemon Meringue in a Bowl of Smoke";
    document.getElementById("content").appendChild(item4);
}

export default createMenuContent;