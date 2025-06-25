import React, { useState } from 'react'

const AddBills = () => {
  const [bills,setBills]=useState({
    companyName:"",
    items:[],
    PoNo:"",
    // invoiceDate,
    workCompletionDate:"",
    address:"",
    PAN:"",
    GSTNo:"",
    clientBankName:""
  })
  
  let handleChange=(e)=>{
    let {name,value}=e.target
    setBills((preVal)=>({...preVal,[name]:value}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(bills)
  }

  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center'>
      <form action=" " className='w-1/2 h-[90%] bg-white flex justify-center items-center flex-col gap-8 px-[80px] py-40 rounded-2xl max-sm:w-[90%] overflow-hidden'onSubmit={handleSubmit}>
        <div className='font-bold text-sm w-full flex justify-center items-center'>
          <h1>Add Bills</h1>
          </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="companyName" placeholder='Enter Company Name' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="PoNo" placeholder='Enter Po No' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
      
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>       
       <input type="date" name="workCompletionDate" placeholder='Enter Work Completion Date' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
      
       </div>
       <div className='border-2 w-full flex justify-center  items-center px-3 rounded-sm'>
       <input type="text" name="password" placeholder='Enter address' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="text" name="PAN" placeholder='Enter PAN' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
      </div>
    
       <div className='border-2 w-full flex justify-center items-center  rounded-sm'>
        <input type="text" name="items" placeholder='Enter Items' className='w-full outline-none  h-10 bg-black text-white' onChange={handleChange}/>
      </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="GSTNo" placeholder='Enter GST No' className='w-full outline-none px-4 h-10' onChange={handleChange}/>  
       </div>
       <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
       <input type="text" name="clientBankName" placeholder='Enter Client Bank Name' className='w-full outline-none px-4 h-10' onChange={handleChange}/>  
       </div>
       <div className='font-bold border-2 w-full flex justify-center items-center outline-none  bg-black text-white rounded-sm '>
        <button className='w-full outline-none px-4 h-10 hover:bg-[#777] active:bg-lime-100 active:scale-[0.8] '>Click</button>
       </div>
      </form>
    </div>
 
  )
}

export default AddBills