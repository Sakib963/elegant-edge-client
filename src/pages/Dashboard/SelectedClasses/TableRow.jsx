import { MdDeleteOutline, MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const TableRow = ({ singleClass, index, handleClassDelete }) => {
  const { _id, name, instructor, price } = singleClass;
  return (
    <tr>
      <Tooltip id="my-tooltip" />
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{instructor}</td>
      <td>{price}</td>
      <td>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => handleClassDelete(_id)}
            className="flex gap-2 items-center bg-[#CDC7F8] px-2 py-1 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300"
          >
            <MdDeleteOutline className="text-xl" />
            Delete
          </button>

          <Link to={`/dashboard/payment/${_id}`}>
            <button className="flex gap-2 items-center bg-[#CDC7F8] px-2 py-1 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300">
              <MdOutlinePayment className="text-xl" />
              Pay
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
