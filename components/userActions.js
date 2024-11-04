import edit from '../assets/edit.svg';
import trash from '../assets/trash.svg';

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = document.createElement("button")
	buttonOne.classList.add("btn")
	const deleteImg = new Image()
	deleteImg.src = trash
	buttonOne.appendChild(deleteImg)

	const buttonTwo = document.createElement("button")
	buttonTwo.classList.add("btn")
	const editImg = new Image()
	editImg.src = edit
	buttonTwo.appendChild(editImg)

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}