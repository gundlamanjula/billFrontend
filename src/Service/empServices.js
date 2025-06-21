import axios from "axios"
import axiosInstance from "../Components/AxiosInstance/Instance"
let empServices={
    regiUser:async(payload)=>{
       try {
        let data=await axiosInstance.post("/register",payload)
        // console.log(data)
        return data
       } catch (error) {
        // console.log(error)
        return error
       }
    }
}
export default empServices