import { Link, NavLink } from "react-router-dom";
import CompanyLogo from "../../../components/CompanyLogo";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import avatarIcon from "../../../assets/images/avatar-icon.png";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/instructors"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/classes"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Classes
        </NavLink>
      </li>
      {user &&
        (isAdmin ? (
          <li>
            <NavLink
              to={"/dashboard/manageclasses"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        ) : isInstructor ? (
          <li>
            <NavLink
              to={"/dashboard/addaclass"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to={"/dashboard/selectedclasses"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        ))}
    </>
  );
  return (
    <div className="navbar lg:px-10 fixed z-10 bg-white border-b-[1px] border-black">
      <Tooltip id="my-tooltip" />
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <CompanyLogo></CompanyLogo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex">
            {user?.photoURL ? (
              <div className="avatar placeholder">
                <div className="bg-[#CDC7F8] text-neutral-content rounded-full w-12">
                  <img
                    src={user.photoURL}
                    alt="user photo"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={
                      user.displayName ? user.displayName : "No Name Added"
                    }
                  />
                </div>
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-[#CDC7F8] text-neutral-content rounded-full w-12">
                  <img
                    src={avatarIcon}
                    alt=""
                    className="p-2"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={
                      user.displayName ? user.displayName : "No Name Added"
                    }
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="ms-3 flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300"
            >
              <BiLogOut className="text-2xl" />
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300">
              <BiLogIn className="text-2xl" />
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
