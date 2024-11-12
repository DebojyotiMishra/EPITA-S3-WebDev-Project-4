export async function fetchUsers() {
  try {
    const url = "http://localhost:3000/api/users";
    const options = {
      method: "GET",
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };

    const res = await fetch(url, options);
    if (!res.ok) throw new Error("Error with the connection");
    const data = await res.json();
    console.log(data);
	return data;
  } catch (error) {
    console.error(error);
	return error;
  }
}
