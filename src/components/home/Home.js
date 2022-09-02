import React from 'react'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
 )
}

export default Home