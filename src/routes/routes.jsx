import { createBrowserRouter } from "react-router-dom"
import Register from "../Components/user/Register"
import Login from "../Components/user/Login"
import Main from "../Components/user/main/Main"
import Home from "../Components/user/main/home/Home"
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
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"addBills",
                element:<AddBills></AddBills>
            },
            {
                path:"filterBills",
                element:<FilterBills></FilterBills>
            }
        ]
    }
])
export default routes