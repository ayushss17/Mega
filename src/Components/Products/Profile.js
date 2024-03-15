import React, { useContext, useEffect, useState } from 'react';
import Add from './Add';
import './Profile.css';
import prof from '../Images/flower1.jpg'
import Footer from '../Homepage/footer';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext';
import { GetuserProduct } from '../Services/GetuserProduct';
import { UseDispatch, useDispatch } from 'react-redux';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const {isMetamaskConnected, metamaskAccount}=useContext(MetamaskContext);
  const dispatch=useDispatch();

  const openDial = () => {
    setOpen(true);
  };
  // useEffect(() => {
  //   console.log(metamaskAccount)
  //   dispatch(getUserProducts(metamaskAccount));
  // }, [dispatch, metamaskAccount]);
  // console.log(metamaskAccount)



  return (
    <>
      <div className='acc' style={{height:200}}>
        {!open && (
          <>
            {isMetamaskConnected ? (
        metamaskAccount ? (
          <>           
           <h1>Hello,</h1>
           <button onClick={openDial}>Drop your ARTS</button>

           <p style={{float:'left' ,marginLeft:'500', textAlign:'center', fontSize:23}}>Metamask Account Number: {metamaskAccount}</p>
          </>  
        ) : (
          <p>Metamask account loading...</p>
        )
      ) : (
        <p style={{float:'left' ,marginLeft:'500', textAlign:'center', fontSize:23}}>Please connect to Metamask to view your account number</p>
      )}          </>
        )}
              <Add open={open} setOpen={setOpen}/>

      </div>
     
      
      <div className='buys'>
        <h2>Buys -</h2>
      </div>
      <div className='Sell'>
        <h2>Sells -</h2>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
