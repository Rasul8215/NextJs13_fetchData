import GetAllUsers from "../api/Users";

const Users = async () => {
    const UsersData = await GetAllUsers();

  return (
    UsersData && <div>
      {
        UsersData.map((data, i) => (
          <div key={data.name}>
            <span>{data.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Users;