import { tourData } from "../data"
import SectionHead from "../SectionHead"
import "./Tour.css"
import Tour from "./Tour"

export default function Tours() {
  return (
    <section className='tours' id='tours'>
      <SectionHead firstText='featured' secondText='tours' />
      <article className='tour-list'>
        {tourData.map((tour) => {
          // const {} = tour
          return <Tour key={tour.id} {...tour} />
        })}
      </article>
    </section>
  )
}
