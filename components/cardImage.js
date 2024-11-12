import "./cardImage.css";

export const cardImage = (cardImage) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-image");

    const img = new Image();
    img.src = cardImage || "https://via.placeholder.com/150";
    img.alt = "Avatar";

    cardDiv.appendChild(img);

    return cardDiv;
}
