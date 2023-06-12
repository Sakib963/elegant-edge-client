import { BsFillSendCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import avatarIcon from "../../../assets/images/avatar-icon.png";

const InstructorCard = ({ instructor }) => {
  const { _id, name, image, classes, total_students } = instructor;
  return (
    <div className="space-y-3 border shadow-xl shadow-[#CDC7F8] rounded-lg p-10">
      <img
        className="mx-auto rounded-lg w-full"
        src={image ? image : avatarIcon}
        alt="Instructor Image"
      />

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="lg:flex justify-between items-center">
          <p>Total Classes: {classes}</p>
          <p>Total Students: {total_students}</p>
        </div>

        <div className="flex justify-center">
          <Link className="w-full" to={`/instructors/${_id}`}>
            <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 w-full">
              <BsFillSendCheckFill className="text-2xl" />
              Check Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
