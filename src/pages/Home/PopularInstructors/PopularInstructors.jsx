import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import InstructorCard from "./InstructorCard";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeContext";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructors, setInstructors] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axiosSecure
      .get("/instructors")
      .then((res) => {
        setInstructors(res.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={theme === "light" ? "my-20 px-10" : "my-20 px-10 text-white"}
    >
      <div className="text-center space-y-3">
        <h3 className="text-4xl font-bold">World Class Instructors</h3>
        <p className="font-semibold lg:w-2/4 mx-auto">
          Unlock Your Potential with our Highly Sought-After Classes: Explore
          the Most Popular Courses to Ignite Your Passion and Master Your Craft.
        </p>
      </div>
      {instructors.length === 0 ? (
        <>
          <h3 className="text-2xl lg:text-3xl text-center mt-10 font-bold">
            No Instructor Added.
          </h3>
        </>
      ) : (
        <div className="grid lg:grid-cols-3 gap-5 lg:w-3/4 mx-auto mt-10">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularInstructors;
