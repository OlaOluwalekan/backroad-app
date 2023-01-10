import "./About.css";
import aboutImage from "../../images/about.jpeg";
import SectionHead from "../SectionHead";

const goHome = () => {
  window.location.href = "#home";
};

export default function About() {
  return (
    <section className="about" id="about">
      <SectionHead firstText="about" secondText="us" />
      <article className="about-body">
        <div className="about-image">
          <img src={aboutImage} alt="about us" />
        </div>
        <div className="about-text">
          <h2>Explore the difference</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button onClick={goHome}>read more</button>
        </div>
      </article>
    </section>
  );
}
