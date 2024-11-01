// eslint-disable-next-line no-unused-vars
import React from 'react'
import p1 from '../Header/img/image copy.png'
import g2 from '../Header/img/grainet.png'
import { useNavigate } from 'react-router-dom';

function Donate() {

  const navigate = useNavigate();
  const Form = () => {
    navigate('/Formin');
  };
   const org=()=>{
    navigate('/Rigesterorg')
   }

  return (
 

<>
<div className="flex bg-[#faf9f9] ">

<div className="  bg-[#756c6c] ">
  <img src={p1}  className=' h-28  w-44 ml-[3rem] ' alt="" />
  <img src={g2} className=' h-[35rem] w-80' />
</div>

<div className="">
<div className="text-white p-6 space-x-32 justify-center bg-[#ce8080] text-2xl">

<a href="" className='pl-1 hover:text-red-600'>Home</a>
<button className="bg-[#756c6c] rounded-md  px-2  py-1  hover:bg-red-400 ">signin</button>

<button className="bg-[#756c6c] rounded-md px-2  py-1 hover:bg-red-400">signup</button>
<a href="" className='hover:text-red-600'>about us</a>

<a href="" className='pr-2 hover:text-red-600'>FAQ</a>
</div>

<h1 className="text-4xl font-semibold pt-36 px-64 pb-20">Welcome to blood and <br /> tissue supply chain <br /> management system </h1>
<div className=" flex justify-around">
<button onClick={Form} className="bg-[#756c6c] text-white rounded-lg  px-20  py-2 hover:bg-red-400 transition">
As Indivdual
          </button>
          <button onClick={org} className="bg-[#756c6c] text-white ml-9 px-20 py-2 rounded-lg  hover:bg-red-400 transition">
          As Organaztion
          </button>
          </div>

          
</div>













</div>




















</>


















  )
}

export default Donate