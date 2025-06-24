import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
const Navbar = () => {
    let [show,setShow]=useState(false)
    let handleShow=()=>{
        setShow(!show)
    }
    // console.log(show)
  return (
    <div className={`w-full h-[80px] bg-black text-amber-50 flex justify-around items-center text-xl max-sm:px-8${show?'h-[210px] flex flex-col justify-around gap-2.5 items-start py-2.5':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>
    <div className={`hidden max-sm:flex`}>{show?<LuMenu onClick={handleShow}/>:<ImCross onClick={handleShow}/>}</div>
        <div className={`max-sm:hidden${show?"block":""}`}>
            <Link to="/home">Home</Link>
        </div>
        <div className={`max-sm:hidden${show?"block":""}`}>
            <Link to="addBills">Add Bills</Link>
        </div>
        <div className={`max-sm:hidden${show?"block":""}`}>
            <Link to="filterBills">Filter Bills</Link>
        </div>
        <div className={`max-sm:hidden${show?"block":""}`}>
            <Link to="about">About</Link>
        </div>

        </div>
  )
}

export default Navbar