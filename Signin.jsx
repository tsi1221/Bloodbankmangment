// eslint-disable-next-line no-unused-vars
import React from 'react'
import p1 from '../Header/img/image copy.png'
import g2 from '../Header/img/grainet.png'
import {Link} from'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Signin() {
  const navigate = useNavigate();

  const Choose = () => {
    navigate('/Donate');
  };
  return (
 

<>
<div id="signin"  className="flex fixed  bg-[#faf9f9]">

<div className=" -ml-3 bg-[#756c6c] ">
  <img src={p1}  className=' h-28  w-32 ml-[3rem] ' alt="" />
  <img src={g2} className=' h-[35rem] w-[21rem] ' />
</div>

<div className="">
<div className="text-white p-6 space-x-32 justify-center bg-[#ce8080] text-2xl">

<a href="" className='pl-1 hover:text-red-600'>Home</a>

<Link to="/signup">
  <button className="bg-[#756c6c] rounded-md px-1 py-1 hover:bg-red-400">
    Sign Up
  </button>
</Link>

<Link to="/signin">
  <button  id="signin" className="bg-[#756c6c] rounded-md  px-1  py-1  hover:bg-red-400 ">
    Sign In
  </button>
</Link>
<a href="" className='hover:text-red-600'>about us</a>

<a href="" className='pr-2 hover:text-red-600'>FAQ</a>
</div>

<h1 className="text-4xl font-semibold pt-20 px-64 pb-24">Welcome to blood and <br /> tissue supply chain <br /> management system </h1>
<div className=" flex justify-around">
<button onClick={Choose}  className="bg-[#756c6c] text-white rounded-lg  px-20  py-2 hover:bg-red-400 transition">
           As Donor
          </button>
          <button onClick={Choose}  className="bg-[#756c6c] text-white ml-9 px-20 py-2 rounded-lg  hover:bg-red-400 transition">
            As hospitail
          </button>
          </div>

          <div onClick={Choose}  className="ml-[22rem]"> <button className="bg-[#756c6c] py-2 mt-8 text-white  px-20 rounded-lg mb-12 hover:bg-red-400 transition">
          As staff
          </button></div>
</div>













</div>




















</>


















  )
}

export default Signin