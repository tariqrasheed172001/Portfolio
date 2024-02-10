import React, { useEffect, useState } from "react";
import "./header.css";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);


  const controlNavbar = () => {
    if(window.scrollY > 100){
      setOpen(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',controlNavbar)
    return () => {
      window.removeEventListener('scroll',controlNavbar)
    }
  },[])

  return (
    <div className="header" >
      <div className="logo" onClick={() => window.location.reload()}>Tariq</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setOpen(!isOpen)}>
            <div className="menu-icon">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={32}
                direction="right"
              />
            </div>
            {isOpen && <Mobile isOpen={isOpen} setOpen={setOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
