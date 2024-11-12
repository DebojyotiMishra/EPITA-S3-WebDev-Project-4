// Helper Functions
import { fetchUsers } from './utils/fetchData.js'
import { handleData } from './utils/handleData.js'
import { modalComp } from "./components/modalComp"
import { usersData } from './components/usersData.js'

import './style.css'

export async function init() {
	app.innerText = "loading ..."
	const usersArray = await fetchUsers()

	if (!usersArray.length) {
		app.innerText = "Something went very very wrong ... " + usersArray
		const img = new Image()
		img.classList.add("error-img")
		img.src = "./assets/offline.jpg"
		app.appendChild(img)
		return
	}

	if (usersArray.length) handleData(usersArray)

	app.appendChild(modalComp())
}

init()