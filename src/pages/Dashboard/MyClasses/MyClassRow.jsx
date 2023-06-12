import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
const MyClassRow = ({ item }) => {
  const { available_seats, image, price, name, status, total_students, _id } =
    item;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Class Image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td className="font-semibold">${price}</td>
      <td>{available_seats}</td>
      <td>{total_students}</td>
      <td>{status}</td>
      <td>{item?.feedback ? item.feedback : "N/A"}</td>
      <td>
        <Link to={`/dashboard/updateclass/${_id}`}>
          <BiEdit className="text-3xl p-1 cursor-pointer bg-[#CDC7F8] rounded-md " />
        </Link>
      </td>
    </tr>
  );
};

export default MyClassRow;
