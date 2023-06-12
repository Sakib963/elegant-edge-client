import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageClassRow from "./ManageClassRow";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch: refetchClasses } = useQuery(
    ["allclasses"],
    async () => {
      const res = await axiosSecure.get("/allclasses");
      return res.data;
    }
  );

  const handleApprove = (classData) => {
    console.log(classData);
    axiosSecure
      .patch(`/updateclasses/${classData._id}?status=approved`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Has Been Approved.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetchClasses();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeny = async (classData) => {
    console.log(classData);
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Provide Feedback",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      const feedback = { feedback: text };
      axiosSecure
        .patch(`/updateclasses/${classData._id}?status=denied`, feedback)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Has Been Denied.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          refetchClasses();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="text-center mt-20 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-bold">Manage Classes</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Class Info</th>
                <th>Price</th>
                <th>Total Students</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classes.map((item, index) => (
                <ManageClassRow
                  key={item._id}
                  classData={item}
                  index={index}
                  handleApprove={handleApprove}
                  handleDeny={handleDeny}
                ></ManageClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
