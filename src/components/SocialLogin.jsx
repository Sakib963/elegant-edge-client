import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        const savedUser = {
          name: loggedUser.displayName || "N/A",
          email: loggedUser.email,
          photo: loggedUser.photoURL,
          role: "student",
        };
        fetch(" https://elegant-edge-server.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed Up Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <FcGoogle
        onClick={handleGoogleSignIn}
        className="mx-auto text-5xl rounded-lg border-[1px] p-2 hover:bg-[#CDC7F8] cursor-pointer"
      />
    </div>
  );
};

export default SocialLogin;
