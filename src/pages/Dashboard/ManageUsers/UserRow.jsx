const UserRow = ({ user, index, handleMakeAdmin, handleMakeInstructor }) => {
  const isAdmin = user.role === "admin";
  const isInstructor = user.role === "instructor";
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <th className="space-x-2">
        <button
          disabled={isAdmin}
          onClick={() => handleMakeAdmin(user)}
          className="btn bg-[#CDC7F8] btn-xs"
        >
          make admin
        </button>
        <button
          disabled={isInstructor}
          onClick={() => handleMakeInstructor(user)}
          className="btn bg-[#CDC7F8] btn-xs"
        >
          make instructor
        </button>
      </th>
    </tr>
  );
};

export default UserRow;
