import "./modalComp.css"

export const modalComp = () => {
	const modalOverLay = document.createElement("div")
	modalOverLay.classList.add("modal-overlay")
	modalOverLay.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			modalOverLay.classList.remove("show")
		}
	})
	// modalOverLay.classList.add("show")

	const modalContent = document.createElement("div")
	modalContent.classList.add("modal-content")
	modalContent.classList.add("animate-top")

	const modalHeader = document.createElement("header")
	const modalTitle = document.createElement("h2")
	modalTitle.innerText = "Title test"

	const closeBtn = document.createElement("button")
	closeBtn.classList.add("btn-close")
	closeBtn.innerText = "X"
	closeBtn.addEventListener("click", (e) => {
		e.stopPropagation()
		modalOverLay.classList.remove("show")
	})

	const modalContainer = document.createElement("div")
	modalContainer.classList.add("modal-container")
	modalContainer.innerText = "Modal Content"

	modalHeader.appendChild(closeBtn)
	modalHeader.appendChild(modalTitle)
	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalContainer)

	modalOverLay.appendChild(modalContent)

	window.addEventListener("keydown", (e) => {
		if (e.key === "Escape") return modalOverLay.classList.remove("show")
	})

	return modalOverLay
}