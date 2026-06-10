import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Certification from '../components/Certification'
import HomeDoctor from '../components/HomeDoctor'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Certification />
      <HomeDoctor />
    </div>
  )
}

export default Home
