import instructorBG from "../../assets/images/instructor-bg.svg";
import { Typewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import InstructorDetailsCard from "./InstructorDetailsCard";
import { useEffect } from "react";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axiosSecure.get('/instructors')
  .then(res => {
    setInstructors(res.data)
  })
  .catch(error => {
    console.log(error)
  });

  }, [])

  return (
    <div className="pt-36 mx-10 lg:mx-0">
      <div className="grid lg:grid-cols-2 gap-5 lg:w-3/4 lg:mx-auto mt-10">
        <div className="flex items-center">
          <div className="space-y-3">
            <h3 className="lg:text-5xl text-3xl font-bold">
              Fashion is{" "}
              <span className="text-[#A69BFB]">
                <Typewriter
                  words={[
                    "Creativity",
                    "Personal",
                    "Expression",
                    "Art",
                    "Style",
                    "Revolution",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="lg:w-3/4 ">
              Meet Our Exceptional Instructors - Seasoned Fashion Professionals
              with Extensive Expertise. Experience Top-notch Guidance and
              Unleash Your Fashion Potential. Join Us to Learn from the Best and
              Elevate Your Skills to New Heights.
            </p>
          </div>
        </div>
        <img
          src={instructorBG}
          alt="Teacher is lecturing"
          className="mx-auto"
        />
      </div>
      <h3 className="lg:text-5xl text-3xl text-center mt-20 mb-10 font-semibold">Meet Our Fashion Experts</h3>
      <div className="grid lg:grid-cols-3 gap-5 lg:w-3/4 mx-auto mt-10">
        {
          instructors.map(instructor => <InstructorDetailsCard key={instructor._id} instructor = {instructor}></InstructorDetailsCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;
