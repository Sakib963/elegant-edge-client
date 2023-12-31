import UserRow from "./UserRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://elegant-edge-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now.`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const handleMakeInstructor = (user) => {
    console.log(user)
    const instructor = {
      name: user.name,
      image: user.photo,
      email: user.email,
      classes: 0,
    };
    console.log(instructor)
    fetch(`https://elegant-edge-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(instructor)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now.`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  return (
    <div className="text-center mt-20 lg:mt-10">
      <Helmet>
                <title>Manage Users | Elegant Edge Fashion School</title>
            </Helmet>
      <h3 className="text-2xl lg:text-3xl font-bold">Manage Users</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Change Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow
                  key={user._id}
                  user={user}
                  index={index}
                  handleMakeAdmin={handleMakeAdmin}
                  handleMakeInstructor={handleMakeInstructor}
                ></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
