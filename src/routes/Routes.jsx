import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../layout/Dashboard";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SingleInstructor from "../pages/SingleInstructor/SingleInstructor";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>,
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/instructors/:id',
                element: <SingleInstructor></SingleInstructor>,
                loader: ({params}) => fetch(`http://localhost:5000/instructors/${params.id}`)
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: "/dashboard",
        element:  <Dashboard></Dashboard>,
        children: [
            {
                path: 'selectedclasses',
                element: <SelectedClasses></SelectedClasses>
            }
        ]
    }
])



export default router;