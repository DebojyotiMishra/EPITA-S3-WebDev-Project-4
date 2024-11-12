// import "./formComp.css"
import { inputComp } from "./inputComp"
import { updateUser } from "../utils/updateUsers.js"
import { fetchUsers } from "../utils/fetchData.js"
import { handleData } from "../utils/handleData.js"
import { modalComp } from "./modalComp"

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} userId
 * @returns {HTMLFormElement}
 */

export const formComp = (firstName, lastName, userId) => {
	const form = document.createElement("form")
	form.classList.add("form")

	form.appendChild(inputComp("text", "firstName", "First Name", firstName))
	form.appendChild(inputComp("text", "lastName", "Last Name", lastName))

	const submitBtn = document.createElement("button")
	submitBtn.setAttribute("type", "submit")
	submitBtn.innerText = "Submit"

	form.addEventListener("submit", async (e) => {
		e.preventDefault()
		const updatedFirstName = document.getElementById("firstName").value
		const updatedLastName = document.getElementById("lastName").value
		const response = await updateUser(updatedFirstName, updatedLastName, userId)
		document.querySelector(".modal-overlay").classList.toggle("show")
		if (response.msg === "User updated") {
			app.innerText = ""
			const usersArray = await fetchUsers()
			// check if this is not an empty array
			if (usersArray.length) handleData(usersArray)
			app.appendChild(modalComp("User updated!"))
			document.querySelector(
				".modal-container"
			).innerText = `${response.firstName} ${response.lastName}`
			document.querySelector(".modal-overlay").classList.toggle("show")

			// wait a couple of sec
			setTimeout(() => {
				document.querySelector(".modal-overlay").classList.toggle("show")
			}, 1500)
		}
	})

	form.appendChild(submitBtn)
	return form
}