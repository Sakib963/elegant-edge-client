import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";
import TableRow from "./TableRow";
import { BiErrorCircle } from "react-icons/bi";

const SelectedClasses = () => {
  const [selectedClass, refetch] = useSelectedClass();
  const emptyClass = selectedClass.length == 0;
  const handleClassDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectclass/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="text-center mt-20 lg:mt-10">
      <h2 className="text-5xl font-semibold">My Selected Classes</h2>
      <div>
        <div className="overflow-x-auto mx-20 mt-10">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Info</th>
                <th>Instructor</th>
                <th>Price</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {selectedClass.map((singleClass, index) => (
                <TableRow
                  key={singleClass._id}
                  singleClass={singleClass}
                  index={index}
                  handleClassDelete={handleClassDelete}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
        {emptyClass && (
          <div className="text-center mx-auto mt-10 space-y-3">
            <iframe
              src="https://embed.lottiefiles.com/animation/85557"
              className="mx-auto"
            ></iframe>
            <h3 className="text-2xl lg:text-5xl font-semibold flex items-center justify-center gap-2">
              <BiErrorCircle className="text-red-600" />
              Please Select A Class First.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedClasses;
