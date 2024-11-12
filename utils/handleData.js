import { cardComponent } from '../components/cardComponent.js'
import { cardImage } from '../components/cardImage.js'
import { usersActions } from '../components/userActions.js'
import { usersData } from '../components/usersData.js'

export function handleData(usersArray) {
	usersArray.forEach((user) => {
        console.log(user)

		const cardArticle = cardComponent()
		cardArticle.setAttribute("userId", user.id)
        cardArticle.appendChild(cardImage(user.profileImg))
        cardArticle.appendChild(usersData(user.firstName, user.lastName))
        cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}