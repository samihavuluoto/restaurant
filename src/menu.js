function createMenuContent() {
    const header = document.createElement("h2");
    const list = document.createElement("ul");
    const item1 = document.createElement("li");
    const item2 = document.createElement("li");
    const item3 = document.createElement("li");
    const item4 = document.createElement("li");

    header.textContent = "Tasting menu - £999";
    document.getElementById("content").appendChild(header);

    list.id = "menulist";
    document.getElementById("content").appendChild(list);

    item1.textContent = "Caviar & Oysters Appetizer";
    document.getElementById("menulist").appendChild(item1);

    item2.textContent = "Liquidized Broccoli & Cheese Soup";
    document.getElementById("menulist").appendChild(item2);

    item3.textContent = "Filet Mignon on a Bed of Chili Magma and a side of Atomized Potato Paste";
    document.getElementById("menulist").appendChild(item3);

    item4.textContent = "Cloud of Whipped Lemon Meringue in a Bowl of Smoke";
    document.getElementById("menulist").appendChild(item4);
}

export default createMenuContent;