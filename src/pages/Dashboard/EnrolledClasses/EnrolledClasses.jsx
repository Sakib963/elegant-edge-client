import ClassRow from "./ClassRow";
import useEnrolledClass from "../../../hooks/useEnrolledClass";

const EnrolledClasses = () => {
  const [enrolledClass] = useEnrolledClass();

  return (
    <div className="text-center mt-20 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-bold">Enrolled Classes</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Class Details</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((singleClass, index) => (
              <ClassRow
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
              ></ClassRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
