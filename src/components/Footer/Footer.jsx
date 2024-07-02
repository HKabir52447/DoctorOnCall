import React from "react";
import logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
      <aside>
        <img src={logo} alt="Logo" className="w-[80px]"/>
        <p className="font-bold">
          Providing best healthcare.
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
