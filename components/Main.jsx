import React from 'react'
import { useState } from 'react';
import img1 from '../images/contact.svg'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Main() {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [mess, setMess] = useState(" ")

 

  const chName = (e) => {
    setName(e.target.value)
  }
  const chEmail = (e) => {
    setEmail(e.target.value)
  }
  const chMess = (e) => {
    setMess(e.target.value)
  }
  const sub = (e) =>{
    setName("")
  }

  return (
    <>
    <div className=' w-[75%] mx-auto ' >
        <h1 className='text-5xl font-bold pt-7'  >CONTACT US</h1>
        <p className='font-light mt-2' >  LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, <br /> OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, <br /></p>
        <div className='flex items-center justify-between ' > 
          <div className='mt-16' >
            <div className='flex gap-5' >
            <div className='flex items-center bg-black text-white px-6 py-3 rounded-lg'>
                  <div className='text-white mr-3'>
                  <MdMessage />
                  </div>
                  <div>
                    <button>Via Support Chat</button>
                  </div>
                </div>
                <div className='flex items-center bg-black text-white px-14 py-3 rounded-lg'>
                  <div className='text-white mr-3'>
                  <IoCall />
                  </div>
                  <div>
                    <button>Via Call</button>
                  </div>
                </div>
            </div>
            <div className='flex flex-col ' >
              <input onChange={chName}  className=' mt-5 border-black border-[1px] rounded-md px-4 py-2 relative' type="text" />
              <label className='absolute mt-[6px] ml-[15px] font-semibold bg-white' htmlFor="">Name</label>
            </div>
            <div className='flex flex-col ' >
              <input onChange={chEmail}  className='w-[] mt-5 border-black border-[1px] rounded-md px-4 py-2 relative' type="email" />
              <label className='absolute mt-[6px] ml-[15px] font-semibold bg-white' htmlFor="">Email</label>
            </div>
            <div className='flex flex-col ' >
              <input onChange={chMess}  className='w-[] mt-5 border-black border-[1px] pb-40 rounded-md px-4 py-2 relative' type="email" />
              <label className='absolute mt-[6px] ml-[15px] font-semibold bg-white' htmlFor="">Messege</label>
            </div>
            <div>
              <button onClick={sub} className='text-white bg-black px-8 mt-3 ml-[295px] py-2 rounded-lg' >Submit</button>
            </div>
          </div>
             <div>
                <img className='' src={img1} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Main
