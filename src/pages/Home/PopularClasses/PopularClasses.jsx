import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import ClassesCard from "./ClassesCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
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
    <div className="my-20 px-10">
      <div className="text-center space-y-3">
        <h3 className="text-4xl font-bold">Check Our Popular Classes</h3>
        <p className="font-semibold lg:w-2/4 mx-auto">
          Discover the Hottest Trendsetters: Immerse Yourself in the Most
          Popular and In-Demand Classes, Unleash Your Creativity, and Embrace
          the Latest Fashion Innovations.
        </p>
      </div>
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

export default PopularClasses;
