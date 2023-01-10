import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

export default function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <SocialLink url={url} icon={icon()} />
          </li>
        );
      })}
    </ul>
  );
}
