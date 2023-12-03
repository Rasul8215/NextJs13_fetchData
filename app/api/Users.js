const GetAllUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok) {
        console.log("Error Occured");
        return;
    };
    return await response.json();
}

export default GetAllUsers;