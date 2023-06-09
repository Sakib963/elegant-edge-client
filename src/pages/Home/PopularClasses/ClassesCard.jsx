import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

const ClassesCard = ({ singleClass }) => {
  const { _id, image, name, instructor, available_seats, total_students } =
    singleClass;
  return (
    <div className="space-y-3 bg-gradient-to-b to-[#C3AAC3] from-[#B2B5E0] rounded-lg p-10">
      <img className="mx-auto rounded-lg" src={image} alt="Class Image" />

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p>
          By <span className="font-semibold">{instructor}</span>
        </p>
        <div className="flex justify-between items-center pb-5">
          <p>Available Seats: {available_seats}</p>
          <p>Total Students: {total_students}</p>
        </div>

        <div className="flex justify-center">
          <Link to={`/classes/${_id}`}>
            <button className="flex gap-2 items-center border px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#CDC7F8] duration-300">
              <GrAddCircle className="text-2xl" />
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
