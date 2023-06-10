import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selectclass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user.email) {
        const res = await axiosSecure(`/selectclass?email=${user?.email}`);
        return res.data;
      }
      return [];
    },
  });

  return [selectedClass, refetch];
};

export default useSelectedClass;
