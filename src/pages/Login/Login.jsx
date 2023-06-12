import { useContext, useState } from "react";
import loginPic from "../../assets/images/sign_up.svg";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiErrorCircle, BiLogIn } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [open, setOpen] = useState(0);
  const [wrongPasswordError, setWrongPasswordError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [inputType, setInputType] = useState("password");
  /* Handling See Password */
  const handleToggle = () => {
    if (open == 0) {
      setOpen(1);
    } else {
      setOpen(0);
    }
    if (!open) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setWrongPasswordError(true);
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setNotFoundError(true);
        }
      });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4 pt-36">
      <Helmet>
        <title>Login | Elegant Edge Fashion School</title>
      </Helmet>
      <div className="space-y-4">
        <h3 className="lg:text-5xl text-3xl font-bold text-center">
          Please Login
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-5 lg:w-2/4 mx-10 lg:mx-auto space-y-3 rounded-lg"
        >
          <div className="space-y-1">
            <p className="font-semibold">Email Address</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className=" h-full border-none w-11/12 outline-none"
              />
            </div>
            {errors.email && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Password</p>
            <div className="flex justify-between items-center input input-md outline-none input-bordered">
              <input
                type={inputType}
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/,
                })}
                placeholder="Password (Must have to more than 6 characters)"
                id="password"
                className=" h-full border-none w-11/12 outline-none"
              />
              <div className="text-lg">
                <AiFillEye
                  onClick={handleToggle}
                  className={!open ? "" : "hidden"}
                />
                <AiFillEyeInvisible
                  onClick={handleToggle}
                  className={!open ? "hidden" : ""}
                />
              </div>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> Password must be 6 characters.
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> Password must be less or equal than 20
                characters.
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 flex items-baseline gap-1">
                <BiErrorCircle />
                Password must contain at least one upppercase and one special
                character.
              </p>
            )}
            {wrongPasswordError && (
              <p className="text-red-600 flex items-baseline gap-1">
                <BiErrorCircle />
                Wrong Password.
              </p>
            )}
            {notFoundError && (
              <p className="text-red-600 flex items-baseline gap-1">
                <BiErrorCircle />
                User Not Found.
              </p>
            )}
          </div>
          <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-3 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#A69BFB] duration-300 w-full">
            <BiLogIn className="text-2xl" />
            Submit
          </button>
          <p>
            Dont&apos;t have an account?{" "}
            <Link to="/register" className="underline text-[#8171FA] ml-1">
              Register
            </Link>
          </p>
          <div className="divider"></div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
      <div>
        <img src={loginPic} alt="login picture" className="mx-auto" />
      </div>
    </div>
  );
};

export default Login;
