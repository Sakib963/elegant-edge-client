import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import classBG from '../../assets/images/classes-bg.svg'
import ClassesCard from "../Home/PopularClasses/ClassesCard";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    axiosSecure
      .get("/classes")
      .then((res) => {
        setClasses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={theme === 'light' ? "pt-36 mx-10 lg:mx-0": "pt-36 mx-10 lg:mx-0 text-white"}>
      <Helmet>
                <title>Classes | Elegant Edge Fashion School</title>
            </Helmet>
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
          src={classBG}
          alt="Teacher is lecturing"
          className="mx-auto"
        />
      </div>
      <h3 className="lg:text-5xl text-3xl text-center mt-20 mb-10 font-semibold">
        Meet Our Fashion Experts
      </h3>
      <div className="grid lg:grid-cols-3 gap-5 lg:w-3/4 mx-auto mt-10">
        {classes.map((singleClass) => (
          <ClassesCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
