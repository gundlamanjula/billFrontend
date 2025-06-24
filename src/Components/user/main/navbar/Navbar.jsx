import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import AddBills from '../addBills/AddBills';
import FilterBills from '../filterBills/FilterBills';
import About from '../about/About';
const Navbar = () => {
    let [show,setShow]=useState({
        //setShow()
        path:"/home",
        index:true,
        element:[
            {
                path:"addBills",
                element:<AddBills></AddBills>
            },
            {
                path:"filterBills",
                element:<FilterBills></FilterBills>
            },
            {
                path:"about",
                element:<About></About>
            }
        ]
        
    })
    console.log(show)
  return (
    <div className='bg-red-600'>
        <div><LuMenu /></div>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="addBills">Add Bills</Link></div>
        <div><Link to="filterBills">Filter Bills</Link></div>
        <div><Link to="about">About</Link></div>
    </div>
  )
}

export default Navbar