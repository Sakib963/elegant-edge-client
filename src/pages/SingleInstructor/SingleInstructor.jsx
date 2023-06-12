import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import instructorBG from "../../assets/images/instructor-bg.svg";
import ClassesCard from "../Home/PopularClasses/ClassesCard";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";
import { Helmet } from "react-helmet-async";

const SingleInstructor = () => {
  const { name, image, email, classes } = useLoaderData();
  const [axiosSecure] = useAxiosSecure();
  const [classesByInstructor, setClassesByInstructor] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axiosSecure
      .get(`/classes?email=${email}`)
      .then((res) => {
        setClassesByInstructor(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className={
        theme === "light"
          ? "mx-10 pt-36 space-y-5"
          : "mx-10 pt-36 space-y-5 text-white"
      }
    >
      <Helmet>
        <title>Instructor | Elegant Edge Fashion School</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="text-center space-y-3">
          <img src={image} alt="" className="rounded-md mx-auto" />
          <div className="space-y-2">
            <h3 className="text-2xl lg:text-5xl font-bold">{name}</h3>
            <p className="lg:text-xl font-semibold">
              Email: <span className="font-normal">{email}</span>
            </p>
            <p className="lg:text-xl font-semibold">
              Total Classes: <span className="font-normal">{classes}</span>
            </p>
          </div>
        </div>
        <img src={instructorBG} alt="" />
      </div>
      <h3 className="pt-10 text-2xl lg:text-5xl font-semibold text-center">
        Classes of {name}
      </h3>
      {classesByInstructor.length === 0 ? (
        <>
          <h3 className="text-2xl lg:text-3xl font-semibold text-center">
            No Class Available
          </h3>
        </>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 pt-10 lg:mx-auto lg:w-3/4 col-span-3">
          {classesByInstructor.map((classByInstructor) => (
            <ClassesCard
              key={classByInstructor._id}
              singleClass={classByInstructor}
            ></ClassesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleInstructor;
