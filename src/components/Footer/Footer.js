import Link from "../Header/Link"
import SocialLink from "../Header/SocialLink"
import { navLinks, socialLinks } from "../data"
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <ul className='nav-links'>
        {navLinks.map((link) => {
          return (
            <li>
              <Link text={link.text} key={link.id} />
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {socialLinks.map((link) => {
          return (
            <li>
              <SocialLink icon={link.icon()} key={link.id} url={link.url} />
            </li>
          )
        })}
      </ul>
      <article className='copy-rigth'>
        Copyright © Backroads Travel Tours Company{" "}
        <span>{new Date().getFullYear()}</span> All Rights Reserved
      </article>
    </footer>
  )
}
