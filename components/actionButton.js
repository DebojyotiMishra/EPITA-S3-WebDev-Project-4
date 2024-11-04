import "./actionButton.css";
/**
 * @param {string} icon
 * @param {string} className
 * @param {function} onClick
 * @returns {HTMLButtonElement}
 */

export const actionButton = (icon, className, onClick) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn");
  buttonElement.classList.add(className);
  const deleteImg = new Image();
  deleteImg.src = icon;
  buttonElement.appendChild(deleteImg);

  buttonElement.addEventListener("click", () => {
    onClick();
  });

  return buttonElement;
};
