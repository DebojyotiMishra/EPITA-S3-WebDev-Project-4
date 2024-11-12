import "./userActions.css"
import { actionButton } from "./actionButton"
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

    const buttonOne = actionButton(edit, "warning-btn", buttonOneClick)
    const buttonTwo = actionButton(trash, "danger-btn", buttonTwoClick)

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}

function buttonOneClick(e) {
	document.querySelector(".modal-overlay").classList.toggle("show")
	const userId = e.target.parentElement.parentElement.getAttribute("userId")
	console.log(userId)
}

function buttonTwoClick(e) {
	document.querySelector(".modal-overlay").classList.toggle("show")
	const userId = e.target.parentElement.parentElement.getAttribute("userId")
	console.log(userId)
}