import React, { useEffect } from 'react'
import Home from './components/home/Home';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Home />
    </div>
  )
}

export default App

