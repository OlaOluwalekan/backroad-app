export default function SocialLink({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}
