import "./header.css";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import { useState } from "react";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className={`header ${navIsOpen && "open-nav"}`}>
      {/* logo */}
      <article className="site-logo">
        <img src={logo} alt="logo" />
      </article>
      <span className="open-nav-icon" onClick={() => setNavIsOpen(!navIsOpen)}>
        <FaBars />
      </span>
      <nav onClick={() => setNavIsOpen(false)}>
        {/* links */}
        <Links />
        {/* social icons */}
        <SocialLinks />
      </nav>
    </header>
  );
}
