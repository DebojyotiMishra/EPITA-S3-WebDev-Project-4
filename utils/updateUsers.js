export async function updateUser(firstName, lastName, userId) {
	try {
		const sendData = JSON.stringify({ firstName, lastName })
		const url = `http://localhost:3000/api/users/${userId}`
		const options = {
			method: "PUT",
			headers: {
				"x-api-key": import.meta.env.VITE_API_KEY,
				"Content-Type": "application/json",
			},
			body: sendData,
		}
		const res = await fetch(url, options)

		if (!res.ok) throw new Error("Error with the connection")
		const data = await res.json()
		// console.log(data);

		return data
	} catch (error) {
		console.log(error)
		return data
	}
}