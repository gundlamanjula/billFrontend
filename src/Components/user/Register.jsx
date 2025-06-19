import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { CgRename } from "react-icons/cg";
import { TbPassword } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
const Register = () => {
  let [FormData,setFormData]=useState({
    name:"",
    userName:"",
    email:"",
    password:""
  })
  let handleChange=(e)=>{
  let {name,value}=e.target
  setFormData((preVal)=>({...preVal,[name]:value}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(FormData)
  }
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center'>
      <form action=" " className='w-1/2 h-[90%] bg-white flex justify-center items-center flex-col gap-8 px-[80px] py-40 rounded-2xl max-sm:w-[90%]'onSubmit={handleSubmit}>
        <div className='font-bold text-sm w-full flex justify-center items-center'>
          <h1>Registration Form</h1>
          </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="name" placeholder='Enter Name' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       <span><CgNametag /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="userName" placeholder='Enter userName' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       <span><CgRename /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>       
       <input type="email" name="email" placeholder='Enter Email' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       <span><MdEmail /></span>
       </div>
       <div className='border-2 w-full flex justify-center  items-center px-3 rounded-sm'>
       <input type="password" name="password" placeholder='Enter Password' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       <span><RiLockPasswordLine /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="password" name="password" placeholder='Re-Enter Password' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       <span><TbPassword /></span>
       </div>
       <div className='font-bold border-2 w-full flex justify-center items-center outline-none  bg-black text-white rounded-sm '>
        <button className='w-full outline-none px-4 h-10 '>Click</button>
       </div>
      </form>
    </div>
  )
}

export default Register