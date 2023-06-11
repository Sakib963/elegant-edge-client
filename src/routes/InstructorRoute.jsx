import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  const [isInstructor, isInstructorLoading] = useInstructor();

  if (loading || isInstructorLoading) {
    return (
      <>
        <progress className="progress"></progress>
      </>
    );
  }
  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
