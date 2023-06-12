import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineSelect,
  AiOutlineEnter,
  AiOutlineDollar,
  AiOutlineUsergroupDelete,
  AiOutlineProject,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import CompanyLogo from "../components/CompanyLogo";
import { BiLogOut } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { ThemeContext } from "../providers/ThemeContext";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logOut } = useContext(AuthContext);
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
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const navOptions = (
    <>
      <li>
        <CompanyLogo />
      </li>
      {isAdmin ? (
        <>
          <li>
            <NavLink
              to={"/dashboard/manageclasses"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <MdManageHistory className="text-lg" />
              Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/manageusers"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaUsersCog className="text-lg" />
              Manage Users
            </NavLink>
          </li>
        </>
      ) : isInstructor ? (
        <>
          <li>
            <NavLink
              to={"/dashboard/addaclass"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <AiOutlineVideoCameraAdd className="text-lg" />
              Add A Class
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/myclasses"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <SiGoogleclassroom className="text-lg" />
              My Classes
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to={"/dashboard/selectedclasses"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <AiOutlineSelect className="text-lg" />
              Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/enrolledclasses"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <AiOutlineEnter className="text-lg" />
              Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/paymenthistory"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <AiOutlineDollar className="text-lg" />
              Payment
            </NavLink>
          </li>
        </>
      )}
      <div className="divider"></div>
      <>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <AiOutlineHome className="text-lg" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/instructors"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <AiOutlineUsergroupDelete className="text-lg" />
            Instructors
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/classes"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <AiOutlineProject className="text-lg" />
            Classes
          </NavLink>
        </li>
        <li>
          <label className="swap swap-rotate me-2">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </li>
      </>
      <div className="divider"></div>
      <button
        onClick={handleLogout}
        className={
          theme === "light"
            ? "ms-3 flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300"
            : "ms-3 flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300 text-black"
        }
      >
        <BiLogOut className="text-2xl" />
        Logout
      </button>
    </>
  );
  return (
    <div
      className={
        theme === "light"
          ? "drawer lg:drawer-open"
          : "drawer lg:drawer-open text-white"
      }
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <GiHamburgerMenu
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden text-5xl p-2 rounded-md bg-[#CDC7F8] m-2 fixed top-0"
          />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul
          className={
            theme === "light"
              ? "menu p-4 w-80 h-full bg-base-200 text-base-content space-y-4"
              : "menu p-4 w-80 h-full bg-base-200  space-y-4 text-white"
          }
        >
          {/* Sidebar content here */}
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
