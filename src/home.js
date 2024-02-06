function createHomeContent() {
    const header = document.createElement("h2");
    const paragraph = document.createElement("p");

    header.textContent = "Onkalo - The New Multisensory Restaurant";
    document.getElementById("content").appendChild(header);

    paragraph.textContent = "Come let the velvety textures melt in your mouth and exotic flavours invigorate your taste buds.";
    document.getElementById("content").appendChild(paragraph);
}

export default createHomeContent;