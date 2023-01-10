export default function Link({ text }) {
  return (
    <a className="nav-link" href={`#${text}`}>
      {text}
    </a>
  );
}
