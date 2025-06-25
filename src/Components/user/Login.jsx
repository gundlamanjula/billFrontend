import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import empServices from '../../Service/empServices';
const Login = () => {
  let navigate=useNavigate()
  let [formData,setFormData]=useState(
    {
      email:"",
      password:""
    }
  )
  let handleChange=(e)=>{
    let {name,value}=e.target
    setFormData((preVal)=>({...preVal,[name]:value}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    let {email,password}=formData
    if(!email||!password)
      {
        toast.error("All Fields are mandatory")
        return
      }
// console.log(formData)
    
(async()=>{
  let data=await empServices.loginUser(formData)
  try {
    if(data.status==200)
      {
        toast.success("Login Successfully")
        navigate("/home")
      }
      else{
        toast.error(`${data.response.data.message}`)
      }
  } catch (error) {
    toast.error("Login failed")
  }
})()
}; 
  
  return <div className='bg-[#efefef] size-full flex justify-center items-center'>
  <form action=" " className='w-1/2 h-[90%] bg-white flex justify-center items-center flex-col gap-8 px-[80px] py-40 rounded-2xl max-sm:w-[90%] overflow-hidden'onSubmit={handleSubmit}>
    <div className='font-bold text-sm w-full flex justify-center items-center'>
      <h1>Login Form</h1>
      </div>
    
   <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>       
   <input type="email" name="email" placeholder='Enter Email' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
   <span><MdEmail /></span>
   </div>
   <div className='border-2 w-full flex justify-center  items-center px-3 rounded-sm'>
   <input type="password" name="password" placeholder='Enter Password' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
   <span><RiLockPasswordLine /></span>
   </div> 
   <div className='font-bold border-2 w-full flex justify-center items-center outline-none  bg-black text-white rounded-sm '>
    <button className='w-full outline-none px-4 h-10 hover:bg-[#777] active:bg-lime-100 active:scale-[0.8] '>Click</button>
   </div>
   <div className='hover:underline'><Link to="register">Click here to Register</Link></div>
  </form>
</div>
}

export default Login