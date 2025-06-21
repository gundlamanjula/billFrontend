import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { CgRename } from "react-icons/cg";
import { TbPassword } from "react-icons/tb";
import {toast} from "react-hot-toast"
import { RiLockPasswordLine } from "react-icons/ri";
import {validatePassword} from "val-pass"
import empServices from '../../Service/empServices';
import {useNavigate} from "react-router-dom";
const Register = () => {
  let navigate=useNavigate()
  let [FormData,setFormData]=useState({
    name:"",
    userName:"",
    email:"",
    password:""
  })
  // let [repeatPassword,setRepeatPassword]=useState("")
  const [matched,setMatched]=useState(true)
  let [errorMessage,setErrorMessage]=useState("")
  let handleChange=(e)=>{
  let {name,value}=e.target
  if(name=="password")
    {
      let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
      // console.log(validateAll)
      // console.log(getAllValidationErrorMessage)

      validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
      value==""&&setErrorMessage("")
    }
  setFormData((preVal)=>({...preVal,[name]:value}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    let {name,email,userName,password}=FormData
  
    if(!name||!userName||!email||!password)
      {
          toast.error("all fields are mandatory")
          return
      }
      let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
      if(!validateAll())
        {
          toast.error(`${getAllValidationErrorMessage()}`)
        }
        if(!matched)
          {
            toast.error("password and confirm password did not match")
            return
          }
          console.log(FormData) 
        }; 
          // empServices.regiUser(FormData)   
          
          (async()=>{
            let data=await empServices.regiUser(FormData)
            try {
              if(data.status==201)
                {
                  toast.success("Registered Successfully")
                  navigate("/login")
                }
                else{
                  toast.error("Registration failed")
                }
            } catch (error) {
              toast.error("Registration failed")
            }
          })()
  
  let handlePasswordCheck=(e)=>
    {
      let {value}=e.target
      FormData.password!=value?setMatched(false):setMatched(true)
      value==""&&setMatched(false)
      
    }
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center'>
      <form action=" " className='w-1/2 h-[90%] bg-white flex justify-center items-center flex-col gap-8 px-[80px] py-40 rounded-2xl max-sm:w-[90%] overflow-hidden'onSubmit={handleSubmit}>
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
       <div className={errorMessage?'w-full flex justify-center  items-center px-3 rounded-sm':'hidden'}>
        <span className='text-red-700'>*{errorMessage}</span>
        </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="password" name="password" placeholder='Re-Enter Password' className='w-full outline-none px-4 h-10' onChange={handlePasswordCheck}/>
       <span><TbPassword /></span>
       </div>
       <div className='font-bold border-2 w-full flex justify-center items-center outline-none  bg-black text-white rounded-sm '>
        <button className='w-full outline-none px-4 h-10 hover:bg-[#777] active:bg-lime-100 active:scale-[0.8] '>Click</button>
       </div>
      </form>
    </div>
  )
}

export default Register