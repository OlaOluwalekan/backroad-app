import { FaMap } from "react-icons/fa"

export default function Tour({ image, date, name, duration, cost, location }) {
  return (
    <div className='single-tour'>
      <article className='image-and-date'>
        <img src={image} alt={name} />
        <p>{date}</p>
      </article>
      <article className='name-and-desc'>
        <h5>{name}</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
      </article>
      <article className='location-and-cost'>
        <span className='first'>
          <FaMap className='map-icon' />
          {location}
        </span>
        <span>{duration} Days</span>
        <span>From ${cost}</span>
      </article>
    </div>
  )
}
