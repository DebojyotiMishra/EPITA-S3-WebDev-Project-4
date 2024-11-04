import { cardComponent } from './components/cardComponent.js'
import { cardImage } from './components/cardImage.js'
import { usersActions } from './components/userActions.js'
import { usersData } from './components/usersData.js'

import './style.css'
import { fetchUsers } from './utils/fetchData.js'

const imageOne = cardComponent()
imageOne.appendChild(cardImage())
imageOne.appendChild(usersData())
imageOne.appendChild(usersActions())

app.appendChild(imageOne)