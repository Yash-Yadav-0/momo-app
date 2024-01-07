import React, { useState } from "react";
import { Logo, Facebook, Instagram, Tiktok } from "../../assets/images/Logo";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/images/menu.png";
import closeIcon from "../../assets/images/close.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const navData = [
    { id: 1, value: "About Us", path: "/about" },
    { id: 2, value: "Our Menu", path: "/our-menu" },
    { id: 3, value: "Our Services", path: "/our-services" },
    { id: 4, value: "Allergy Advices", path: "/allergy-advices" },
  ];

  const socialLinks = [
    { id: 1, value: "facebook", logo: <Facebook /> },
    { id: 2, value: "instagram", logo: <Instagram /> },
    { id: 3, value: "tiktok", logo: <Tiktok /> },
  ];

  return (
    <nav className="nav">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navData.map((item) => (
          <li
            key={item.id}
            className={`${
              active === item.value ? "text-slate-300" : "text-slate-500"
            }`}>
            <Link to={item.path}>{item.value}</Link>
          </li>
        ))}
      </ul>
      <div className="button-container">
        {socialLinks.map((item) => item.logo)}
        <Link to="/contact" className="button-contact">
          Contact Us
        </Link>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center mr-0 h-[45px]">
        {toggle ? (
          <img
            src={closeIcon}
            alt="close"
            className="h-[45px]"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          />
        ) : (
          <img
            src={menuIcon}
            alt="menu"
            className="h-[45px]"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          />
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 black-gradient absolute top-[2rem] right-0 mx-2 my-2 min-w-[140px] z-5 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navData.map((item) => (
              <li
                key={item.id}
                className={`${
                  active === item.value ? "text-slate-300" : "text-slate-500"
                }`}>
                <Link to={item.path}>{item.value}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
