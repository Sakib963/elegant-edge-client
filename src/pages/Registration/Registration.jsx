import { useForm } from "react-hook-form";
import { BiErrorCircle, BiLogIn } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import registrationPic from "../../assets/images/registration.svg";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const [open, setOpen] = useState(0);
  const [inputType, setInputType] = useState("password");
  const [retypeOpen, setRetypeOpen] = useState(0);
  const [retypeInputType, setRetypeInputType] = useState("password");
  const [notMatchError, setNotMatchError] = useState(1);

  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRetypeToggle = () => {
    if (retypeOpen == 0) {
      setRetypeOpen(1);
    } else {
      setRetypeOpen(0);
    }
    if (!retypeOpen) {
      setRetypeInputType("text");
    } else {
      setRetypeInputType("password");
    }
  };

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
    setNotMatchError(1);
    if (data.password !== data.retypePassword) {
      setNotMatchError(0);
      return;
    }
    console.log(data);

    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;

        updateUserProfile(data.name, data.photo)
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
              role: "student",
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
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
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid lg:grid-cols-2 gap-4 pt-36">
      <Helmet>
        <title>Register | Elegant Edge Fashion School</title>
      </Helmet>
      <div className="space-y-4">
        <h3 className="lg:text-5xl text-3xl font-bold text-center">
          Please Register
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-5 lg:w-2/4 mx-10 lg:mx-auto space-y-3 rounded-lg"
        >
          {/* Name Field */}
          <div className="space-y-1">
            <p className="font-semibold">Your Name</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Your Full Name"
                className=" h-full border-none w-11/12 outline-none"
              />
            </div>
            {errors.email && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
          {/* Email Field */}
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
          {/* Password Field */}
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
          </div>
          {/* Retype Password */}
          <div className="space-y-1">
            <p className="font-semibold">Retype Password</p>
            <div className="flex justify-between items-center input input-md outline-none input-bordered">
              <input
                type={retypeInputType}
                name="retypePassword"
                {...register("retypePassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/,
                })}
                placeholder="Password (Must have to more than 6 characters)"
                id="retypePassword"
                className=" h-full border-none w-11/12 outline-none"
              />
              <div className="text-lg">
                <AiFillEye
                  onClick={handleRetypeToggle}
                  className={!retypeOpen ? "" : "hidden"}
                />
                <AiFillEyeInvisible
                  onClick={handleRetypeToggle}
                  className={!retypeOpen ? "hidden" : ""}
                />
              </div>
            </div>
            {errors.retypePassword?.type === "required" && (
              <p className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> Password is required
              </p>
            )}
            {errors.retypePassword?.type === "minLength" && (
              <p className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> Password must be 6 characters.
              </p>
            )}
            {errors.retypePassword?.type === "maxLength" && (
              <p className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> Password must be less or equal than 20
                characters.
              </p>
            )}
            {errors.retypePassword?.type === "pattern" && (
              <p className="text-red-600 flex items-baseline gap-1">
                <BiErrorCircle />
                Password must contain at least one upppercase and one special
                character.
              </p>
            )}
            {!notMatchError && (
              <p className="text-red-600 flex items-baseline gap-1">
                <BiErrorCircle />
                Password Doesn&apos;t Match.
              </p>
            )}
          </div>
          {/* Photo URL Field */}
          <div className="space-y-1">
            <p className="font-semibold">Photo URL</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="photo"
                {...register("photo")}
                placeholder="Enter Photo URL"
                className=" h-full border-none w-11/12 outline-none"
              />
            </div>
            {errors.email && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
          <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-3 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#A69BFB] duration-300 w-full">
            <BiLogIn className="text-2xl" />
            Submit
          </button>
          <p>
            Already Have an Account?
            <Link to="/login" className="underline text-[#8171FA] ml-1">
              Login
            </Link>
          </p>
          <div className="divider"></div>
          <div className="text-center">
            <FcGoogle className="mx-auto text-5xl rounded-lg border-[1px] p-2 hover:bg-[#CDC7F8] cursor-pointer" />
          </div>
        </form>
      </div>
      <div>
        <img src={registrationPic} alt="login picture" className="mx-auto" />
      </div>
    </div>
  );
};

export default Registration;
