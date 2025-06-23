import { createBrowserRouter } from "react-router-dom"
import Register from "../Components/user/Register"
import Login from "../Components/user/Login"
import Main from "../Components/user/main/Main"
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
        element:<Main></Main>
    }
])
export default routes