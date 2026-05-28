import React, { useRef, useState } from "react";
import { navbarStyles as ns } from "../assets/dummyStyles.js";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navInnerRef = useRef(null);
  
  return (
    <header className={ns.header}>
      <nav className={ns.navContainer}>
        <div className={ns.flexContainer}>
          <div className={ns.logoContainer}>
            <img src={logoImg} alt="logo" className={ns.logoImage} />

            <Link to={"/"}>
              <div className={ns.logoLink}>MediCare</div>
              <div className={ns.logoSubtext}>Healthcare Solutios</div>
            </Link>
          </div>

          <div className={ns.centerNavContainer}>
            <div className={ns.glowEffect}>
              <div className={ns.centerNavInner}>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
