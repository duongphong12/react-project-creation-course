import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "./services/UserServices";
import ReactPaginate from "react-paginate";
function TableUser() {
  const [listUsers, setListUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    // call Api
    getUsers();
  }, []);

  const getUsers = async (page) => {
    const respone = await fetchAllUser(page);
    console.log(respone);
    if (respone?.data) {
      setTotalPage(respone.total_pages);
      setListUsers(respone.data);
    }
  };

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };

  return (
    <div>
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
      {/* //codepen.io/monsieurv/pen/abyJQWQ */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default TableUser;
