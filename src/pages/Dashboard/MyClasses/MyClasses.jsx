import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyClassRow from "./MyClassRow";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/myclasses?email=${user.email}`)
      .then((res) => {
        console.log(res.data);
        setClassData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="text-center mt-20 lg:mt-10">
      <Helmet>
                <title>My Classes | Elegant Edge Fashion School</title>
            </Helmet>
      <h3 className="text-2xl lg:text-3xl font-bold">My Classes</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Class Details</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Total Enrolled Students</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classData.map((item) => (
                <MyClassRow key={item._id} item={item}></MyClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
