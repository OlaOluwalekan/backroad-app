export default function SectionHead({ firstText, secondText }) {
  return (
    <h2 className="section-head">
      {firstText} <span>{secondText}</span>
    </h2>
  );
}
