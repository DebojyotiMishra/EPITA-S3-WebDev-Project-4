// Helper Functions
import { fetchUsers } from './utils/fetchData.js'
import { handleData } from './utils/handleData.js'
import { modalComp } from "./components/modalComp"

import './style.css'

const usersArray = await fetchUsers()
if (usersArray.length) handleData(usersArray) 
app.appendChild(modalComp())