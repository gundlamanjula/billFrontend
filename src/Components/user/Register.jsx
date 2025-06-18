import React from 'react'
import { CgNametag } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { CgRename } from "react-icons/cg";
import { TbPassword } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
const Register = () => {
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center '>
      <form action=" " className='w-1/2 bg-white flex justify-center items-center flex-col gap-4 px-[80px] py-40'>
        <div className='font-bold text-3xl w-full flex justify-center items-center'>
          <h1>Register Form</h1>
          </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="name" placeholder='Enter Name' className='w-full outline-none px-4 h-10'/>
       <span><CgNametag /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="username" placeholder='Enter userName' className='w-full outline-none px-4 h-10'/>
       <span><CgRename /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>       
       <input type="email" name="email" placeholder='Enter Email' className='w-full outline-none px-4 h-10'/>
       <span><MdEmail /></span>
       </div>
       <div className='border-2 w-full flex justify-center  items-center px-3 rounded-sm'>
       <input type="password" name="password" placeholder='Enter Password' className='w-full outline-none px-4 h-10'/>
       <span><RiLockPasswordLine /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="password" name="password" placeholder='Re-Enter Password' className='w-full outline-none px-4 h-10'/>
       <span><TbPassword /></span>
       </div>
       <div className='border-2 w-full flex justify-center items-center rounded-sm outline-none px-4 h-10'>
        <button>Click</button>
       </div>
      </form>
    </div>
  )
}

export default Register