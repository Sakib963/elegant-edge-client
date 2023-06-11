import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usePaidClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch: paidRefetch, data: paidClass = [] } = useQuery({
    queryKey: ["payment-history", user?.email],
    enabled: !!user && !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure(`/payment-history?email=${user?.email}`);
        return res.data;
      }
      return [];
    },
  });

  return [paidClass, paidRefetch];
};

export default usePaidClass;
