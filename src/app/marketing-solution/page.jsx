import Footer from '@/components/Layouts/Footer/Footer';
import Navbar from '@/components/Layouts/Navbar/Navbar';
import Hero from '@/components/Marketing-Solution/Hero';
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default page;
