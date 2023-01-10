import "./Services.css";
import SectionHead from "../SectionHead";
import Service from "./Service";
import { servicesData } from "../data";

export default function Services() {
  return (
    <section className="services" id="services">
      <SectionHead firstText="our" secondText="services" />
      <article className="service-list">
        {servicesData.map((service) => {
          const { id, icon, name } = service;
          return <Service key={id} icon={icon()} name={name} />;
        })}
      </article>
    </section>
  );
}
