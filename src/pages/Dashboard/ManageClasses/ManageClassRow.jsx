import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const ManageClassRow = ({ classData, index, handleApprove, handleDeny }) => {
  const { name, instructor, status, total_students, price, image } = classData;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Class Image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{instructor}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{total_students}</td>
      <th>{status}</th>
      <td className="space-x-2">
        <button
          disabled={status === "approved" || status === "denied"}
          className="btn bg-[#CDC7F8] btn-xs"
          onClick={() => handleApprove(classData)}
        >
          {" "}
          <AiOutlineCheck />
          approve
        </button>
        <button
          disabled={status === "approved" || status === "denied"}
          className="btn bg-[#CDC7F8] btn-xs"
          onClick={() => handleDeny(classData)}
        >
          <AiOutlineClose />
          deny
        </button>
      </td>
    </tr>
  );
};

export default ManageClassRow;
