import React from 'react'
import '../styles/home.css'
import zombies from '../bkg-videos/zombies.webm'

const Home = () => {
    return (
        <div className="home">
      <video autoPlay muted loop id="myVideo">
        <source src={zombies} type="video/mp4" />
      </video>
      <header className="viewport-header">
        <h1>Ep Zombie Fest</h1>
      </header>
    </div>
    )
}
export default Home