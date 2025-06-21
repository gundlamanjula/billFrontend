import { createBrowserRouter } from "react-router-dom"
import Register from "../Components/user/Register"
import Login from "../Components/user/Login"
let routes=createBrowserRouter([
    {
        path:"/",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    }
])
export default routes