import { useContext } from "react";
import { GrAddCircle } from "react-icons/gr";
import { MdDownloadDone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";
import useEnrolledClass from "../../../hooks/useEnrolledClass";
import { AiOutlineHolder } from "react-icons/ai";

const ClassesCard = ({ singleClass }) => {
  const {
    _id,
    image,
    name,
    email,
    instructor,
    available_seats,
    total_students,
    price,
  } = singleClass;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedClass, refetch] = useSelectedClass();
  const [enrolledClass, enrolledRefetch] = useEnrolledClass();

  const selected = selectedClass.find((item) => item.classID === _id);
  const seatNotEmpty = available_seats === 0;
  const enrolled = enrolledClass.find((item) => item._id === _id);

  const handleSelectClass = () => {
    if (user) {
      const selectedClass = {
        classID: _id,
        name,
        price,
        instructor,
        instructorEmail: email,
        image,
        userEmail: user.email,
      };
      fetch("http://localhost:5000/selectclass", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            enrolledRefetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class is Selected.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login before performing this action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div
      className={
        seatNotEmpty
          ? "space-y-3 bg-red-500 rounded-lg p-10 text-white"
          : "space-y-3 bg-gradient-to-b to-[#C3AAC3] from-[#B2B5E0] rounded-lg p-10"
      }
    >
      <img className="mx-auto rounded-lg" src={image} alt="Class Image" />

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p>
          By <span className="font-semibold">{instructor}</span>
        </p>
        <div className="lg:flex justify-between items-center">
          <p>Available Seats: {available_seats}</p>
          <p>Total Students: {total_students}</p>
        </div>
        <p className="font-semibold pb-5">
          Price: <span>{price}</span>
        </p>

        <div className="flex justify-center">
          <Link>
            <button
              disabled={selected || seatNotEmpty || enrolled}
              onClick={handleSelectClass}
              className="flex gap-2 items-center border px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#CDC7F8] duration-300"
            >
              {enrolled ? (
                <MdDownloadDone className="text-2xl" />
              ) : selected ? (
                <AiOutlineHolder className="text-2xl" />
              ) : (
                <GrAddCircle className="text-2xl" />
              )}
              {enrolled ? "Enrolled" : selected ? "Selected" : "Select"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
