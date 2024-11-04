export async function fetchUsers() {
	try {
		const res = await fetch("http://localhost:3000/api/users")
		if (!res.ok) throw new Error("Error with the connection")
		const data = await res.json()
		console.log(data)
	} catch (error) {
		console.error(error)
	}
}