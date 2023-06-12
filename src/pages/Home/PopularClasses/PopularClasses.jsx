import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import ClassesCard from "./ClassesCard";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeContext";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axiosSecure
      .get("/classes")
      .then((res) => {
        setClasses(res.data.slice(0, 6));
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
        <h3 className="text-4xl font-bold">Check Our Popular Classes</h3>
        <p className="font-semibold lg:w-2/4 mx-auto">
          Discover the Hottest Trendsetters: Immerse Yourself in the Most
          Popular and In-Demand Classes, Unleash Your Creativity, and Embrace
          the Latest Fashion Innovations.
        </p>
      </div>
      {classes.length === 0 ? (
        <>
          {" "}
          <h3 className="text-2xl lg:text-3xl text-center mt-10 font-bold">
            No Class Added.
          </h3>
        </>
      ) : (
        <div className="grid lg:grid-cols-3 gap-5 lg:w-3/4 mx-auto mt-10">
          {classes.map((singleClass) => (
            <ClassesCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularClasses;
