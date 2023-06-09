import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "./services/UserServices";

function TableUser() {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    // call Api
    getUsers();
  }, []);

  const getUsers = async () => {
    const respone = await fetchAllUser();
    if (respone.data?.data) {
      setListUsers(respone.data.data);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableUser;
