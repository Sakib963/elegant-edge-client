import { BiErrorCircle, BiLogIn } from "react-icons/bi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UpdateClass = () => {
  const classData = useLoaderData();
  const navigate = useNavigate();
  console.log(classData);
  const { _id, name, image, price, available_seats } = classData;
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const classUpdateData = {
      name: data.name,
      image: data.image,
      instructor: data.instructor,
      email: data.email,
      available_seats: parseInt(data.available_seats),
      price: parseInt(data.price),
      total_students: classData.total_students,
      status: classData.status,
    };
    console.log(classUpdateData);

    axiosSecure
      .patch(`/createClass/${_id}`, classUpdateData)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Updated Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/myclasses')
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center mt-20 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-bold">Update Class</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
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
                  defaultValue={name}
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
                  defaultValue={image}
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
                  defaultValue={available_seats}
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
                  defaultValue={price}
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
    </div>
  );
};

export default UpdateClass;
