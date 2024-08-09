import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post("http://localhost:8009/api/usersList");
        setUsers(response.data.data); // Assuming response.data.data contains the array of users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleStatus = async (user) => {
    try {
      const updatedUser = { ...user, is_active: !user.is_active };
      const response = await axios.post("http://localhost:8009/api/userActive", {
        email: user.email,
        is_active: updatedUser.is_active
      });
      if (response.status === 200) {
        console.log("User status updated successfully");
        const updatedUsers = users.map(u => u._id === user._id ? updatedUser : u);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  }

  const handleDelete = async (user) => {
    try {
      const response = await axios.post("http://localhost:8009/api/userDelete", {
        email: user.email
      });
      if (response.status === 200) {
        console.log("User deletion status updated successfully");
        const updatedUsers = users.filter(u => u._id !== user._id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  return (
    <div>
      <h2>Users List</h2>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Role</th>
            <th scope="col">is_Active</th>
            <th scope="col">is_Deleted</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.role}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={user.is_active}
                    onChange={() => handleStatus(user)}
                  />
                </div>
              </td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={user.is_deleted}
                    onChange={() => handleDelete(user)}
                  />
                </div>
              </td>
              <td>
                    <img src={user.url} alt="Profile" width="50" height="50" />
                      </td>
              <td>
                {/* You can add any additional actions here if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
