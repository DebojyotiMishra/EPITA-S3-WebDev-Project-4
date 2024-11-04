import "./cardImage.css";

export const cardImage = () => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-image");

    const img = new Image();
    img.src = "https://xsgames.co/randomusers/assets/avatars/male/31.jpg";
    img.alt = "Avatar";

    cardDiv.appendChild(img);

    return cardDiv;
}
