import * as React from 'react'
import * as navbarStyles from './navbar.module.scss';
import {Link} from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";
import {useEffect, useState} from "react";
import DefaultGreenBtn from "../Buttons/DefaultGreenBtn";

const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })

  const handleScroll = () => setScrollTop(window.scrollY / 50);

  return (
    <nav
      style={
        scrollTop >= 1 ? {backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: '0 0 3px 3.5px #d8d8d880'}
          :
        {backgroundColor: `rgba(255, 255, 255, ${scrollTop})`}
      }
      className={navbarStyles.main_nav_bar}
    >
      <div>
        <StaticImage alt="Logo" src={'../../../images/logo.svg'}/>

        <ul className={navbarStyles.links_div}>
          <li>
            <Link to="/">How does it work?</Link>
          </li>
          <li>
            <Link to="/">Solutions</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Tools</Link>
          </li>
          <li>
            <Link to="/">Academy</Link>
          </li>
        </ul>

        <div className={navbarStyles.right_div}>
          <DefaultGreenBtn text={'Get Started for Free'}/>
          <span>Login</span>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
