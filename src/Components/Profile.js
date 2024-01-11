import React from 'react'
import Footer from './footer'
import './Profile.css'
import prof from '../Components/flower1.jpg'
import Add from './Add'
import { useState } from 'react'
const Profile = () => {
  const [open,setOpen]= useState(false);
  const openDial= () =>{
    setOpen(true)
  }
  return (
    <>
    <div className='acc'>
    <button onClick={()=>{openDial()}}>Add a New ART</button>
    <Add open={open} setOpen={setOpen}></Add>
      <img src={prof} height="200" width="200" alt='No Profile Photo'></img>
      <p>
        <h1>Hello,</h1>
        <h5>Ayush Sawant</h5>
      </p>
    </div>
    <div className='buys' >
        <h2>Buys -</h2>
    </div>
    <div className='Sell'>
        <h2>Sells - </h2>
        <Footer />
    </div></>

  )
}

export default Profile