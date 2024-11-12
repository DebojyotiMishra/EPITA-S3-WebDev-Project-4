import { cardComponent } from '../components/cardComponent.js'
import { cardImage } from '../components/cardImage.js'
import { usersActions } from '../components/userActions.js'
import { usersData } from '../components/usersData.js'

export function handleData(usersArray) {
	usersArray.forEach((user) => {
		const cardArticle = cardComponent()
		cardArticle.appendChild(cardImage())
		cardArticle.appendChild(usersData())
		cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}
