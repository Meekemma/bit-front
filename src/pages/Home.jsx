import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import CustomCarousel from '../components/CustomCarousel';
import CustomCards from '../components/CustomCards';
import Trade from '../components/Trade';
import CallBack from '../components/CallBack';
import Why from '../components/Why';
import Footer from '../components/Footer';
import { CryptoContextProvider } from '../context/CryptoContext';


const Home = () => {
  return (
    <>
      <CryptoContextProvider>
        <CustomAppBar />
        <CustomCarousel/>
        <CustomCards/>
        <Trade/>  
        <CallBack/>
        <Why/>
        <Footer/>
      </CryptoContextProvider>

    </>
  );
};

export default Home;
