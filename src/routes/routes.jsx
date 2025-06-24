import { createBrowserRouter } from "react-router-dom"
import Register from "../Components/user/Register"
import Login from "../Components/user/Login"
import Main from "../Components/user/main/Main"
import Navbar from "../Components/user/main/navbar/NavBar"
import AddBills from "../Components/user/main/addBills/AddBills"
import FilterBills from "../Components/user/main/filterBills/FilterBills"
import About from "../Components/user/main/about/About"
let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    },
    {
        path:"/home",
        element:<Navbar></Navbar>,
    }
])
export default routes