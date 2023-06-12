import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiErrorCircle, BiLogIn } from "react-icons/bi";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { ThemeContext } from "../../../providers/ThemeContext";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const { theme } = useContext(ThemeContext);

  const onSubmit = (data) => {
    const classData = {
      name: data.name,
      image: data.image,
      instructor: data.instructor,
      email: data.email,
      available_seats: parseInt(data.available_seats),
      price: parseInt(data.price),
      total_students: 0,
      status: "pending",
    };
    console.log(classData);

    axiosSecure
      .post("/createClass", classData)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Added Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={
        theme === "light"
          ? "text-center mt-20 lg:mt-10"
          : "text-center mt-20 lg:mt-10 text-white"
      }
    >
      <h3 className="text-2xl lg:text-3xl font-bold">Add A Class</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-5 lg:w-3/4 mx-10 lg:mx-auto space-y-3 rounded-lg mt-10"
      >
        {/* Class Name & Image Field */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Class Name Field */}
          <div className="space-y-1">
            <p className="font-semibold">Class Name</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Class Name"
                className=" h-full border-none w-full outline-none"
              />
            </div>
            {errors.name && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
          {/* Image Field */}
          <div className="space-y-1">
            <p className="font-semibold">Class Image</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="image"
                {...register("image", { required: true })}
                placeholder="Class Image"
                className=" h-full border-none w-full outline-none"
              />
            </div>
            {errors.image && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
        </div>
        {/* Instructor Name & Email Field */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Instructor Name Field */}
          <div className="space-y-1">
            <p className="font-semibold">Instructor Name</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="instructor"
                {...register("instructor")}
                placeholder="Class Name"
                defaultValue={user.displayName}
                readOnly
                className=" h-full border-none w-full outline-none"
              />
            </div>
            {errors.instructor && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
          {/* Instructor Email Field */}
          <div className="space-y-1">
            <p className="font-semibold">Instructor Email</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="email"
                {...register("email", { required: true })}
                placeholder="Instructor Email"
                defaultValue={user.email}
                readOnly
                className=" h-full border-none w-full outline-none"
              />
            </div>
            {errors.email && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
        </div>
        {/* Available Seats & Price Field */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Instructor Name Field */}
          <div className="space-y-1">
            <p className="font-semibold">Available Seats</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="available_seats"
                {...register("available_seats")}
                placeholder="Available Seats"
                className=" h-full border-none w-full outline-none"
              />
            </div>
            {errors.available_seats && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
          {/* Price Field */}
          <div className="space-y-1">
            <p className="font-semibold">Price</p>
            <div className="input input-md outline-none input-bordered">
              <input
                type="text"
                name="price"
                {...register("price", { required: true })}
                placeholder="Price"
                className=" h-full border-none w-full outline-none"
              />
            </div>
            {errors.classImage && (
              <span className="text-red-600 flex items-center gap-1">
                <BiErrorCircle /> This field is required
              </span>
            )}
          </div>
        </div>

        <button className="flex gap-2 justify-center items-center bg-[#CDC7F8] px-3 py-3 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#A69BFB] duration-300 w-full">
          <BiLogIn className="text-2xl" />
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
