function createAboutContent() {
    const header = document.createElement("h2");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");

    header.textContent = "Onkalo specializes into highly conceptual culinary experiences, using the finest and most exquisite ingredients available";
    document.getElementById("content").appendChild(header);

    paragraph1.textContent = "Opening times: Friday to Sunday, 5pm to 11pm.";
    document.getElementById("content").appendChild(paragraph1);

    paragraph2.textContent = "Contact reservations@onkalo.com to book your culinary experience.";
    document.getElementById("content").appendChild(paragraph2);
}

export default createAboutContent;