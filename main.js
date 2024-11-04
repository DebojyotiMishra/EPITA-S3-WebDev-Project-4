import { cardComponent } from './components/cardComponent'
import { cardImage } from './components/cardImage'
import { usersActions } from './components/userActions'
import { usersData } from './components/usersData'
import './style.css'

const imageOne = cardComponent()
imageOne.appendChild(cardImage())
imageOne.appendChild(usersData())
imageOne.appendChild(usersActions())

app.appendChild(imageOne)