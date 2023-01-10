import Link from "./Link";
import { navLinks } from "../data";

export default function Links() {
  return (
    <ul className="nav-links">
      {navLinks.map((link) => {
        const { id, text } = link;
        return (
          <li key={id}>
            <Link text={text} />
          </li>
        );
      })}
    </ul>
  );
}
