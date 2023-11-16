import React from 'react'
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroBanner />
        <Work />
        <Footer />
    </div>
  )
}

export default Home;