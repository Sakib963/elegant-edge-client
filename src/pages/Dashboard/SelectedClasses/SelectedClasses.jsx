import useSelectedClass from "../../../hooks/useSelectedClass";
import TableRow from "./TableRow";

const SelectedClasses = () => {
  const [selectedClass] = useSelectedClass();
  console.log(selectedClass);
  return (
    <div className="text-center mt-10">
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
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedClasses;
