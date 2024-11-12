import "./userActions.css"
import { actionButton } from "./actionButton"
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"
import { formComp } from "./formComp"

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
	const selectedCard = e.target.parentElement.parentElement
	const userId = selectedCard.getAttribute("userId")
	const firstName = selectedCard.getAttribute("firstName")
	const lastName = selectedCard.getAttribute("lastName")
	document.querySelector(".modal-overlay").classList.toggle("show")
	document.querySelector(".modal-container").innerHTML = ""
	document.querySelector(".modal-title").innerText = "Edit user"
	document
		.querySelector(".modal-container")
		.appendChild(formComp(firstName, lastName, userId))
}

function buttonTwoClick(e) {
	const selectedCard = e.target.parentElement.parentElement
	const userId = selectedCard.getAttribute("userId")
	document.querySelector(".modal-overlay").classList.toggle("show")
	document.querySelector(".modal-container").innerHTML = ""
	document.querySelector(".modal-title").innerText = "Warning !"
	document.querySelector(".modal-container").innerText =
		"Confirm delete user? You sure ?"

	const confirmBtn = document.createElement("button")
	confirmBtn.style.backgroundColor = "#d5384f"
	confirmBtn.innerText = "Confirm"
	confirmBtn.addEventListener("click", async () => {
		const response = await deleteUser(userId)
		if (response.message === "User deleted !") {
			init()
		}
	})
	document.querySelector(".modal-container").appendChild(confirmBtn)
}