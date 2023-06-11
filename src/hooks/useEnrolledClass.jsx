import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEnrolledClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch: enrolledRefetch, data: enrolledClass = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user.email) {
        const res = await axiosSecure(`/payments?email=${user?.email}`);
        return res.data;
      }
      return [];
    },
  });

  return [enrolledClass, enrolledRefetch];
};

export default useEnrolledClass;
