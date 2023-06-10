import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineSelect,
  AiOutlineEnter,
  AiOutlineDollar,
  AiOutlineUsergroupDelete,
  AiOutlineProject,
} from "react-icons/ai";
import CompanyLogo from "../components/CompanyLogo";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Dashboard = () => {
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
  const navOptions = (
    <>
      <li>
        <CompanyLogo />
      </li>
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
          to={"/dashboard/payment"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <AiOutlineDollar className="text-lg" />
          Payment
        </NavLink>
      </li>
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
      </>
      <div className="divider"></div>
      <button
        onClick={handleLogout}
        className="ms-3 flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300"
      >
        <BiLogOut className="text-2xl" />
        Logout
      </button>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
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
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-4">
          {/* Sidebar content here */}
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
