import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Link, NavLink } from 'react-router-dom';
import { ImCross } from "react-icons/im";
const Navbar = () => {
    let [show,setShow]=useState(false)
    let handleShow=()=>{
        setShow(!show)
    }
    // console.log(show)
  return (
    <div className={`w-full h-[80px] bg-black text-amber-50 flex justify-around items-center text-xl max-sm:justift-start max-sm:px-8 ${show?'h-[210px] flex flex-col justify-around gap-2 items-start py-2.5':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>
    <div className={`hidden max-sm:flex`}>
        {
            show?<LuMenu onClick={handleShow}/>:<ImCross onClick={handleShow}/>
        }
    </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="/home"  className={({isActive})=>isActive?"bg-amber-50 rounded-sm text-black p-2":""} end>Home</NavLink>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="addBills"  className={({isActive})=>isActive?"bg-amber-50 rounded-sm text-black p-2":""} end>Add Bills</NavLink>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="filterBills"  className={({isActive})=>isActive?"bg-amber-50 rounded-sm text-black p-2":""} end>Filter Bills</NavLink>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="about" className={({isActive})=>isActive?"bg-amber-50 rounded-sm text-black p-2":""} end>About</NavLink>
        </div>

        </div>
  )
}

export default Navbar