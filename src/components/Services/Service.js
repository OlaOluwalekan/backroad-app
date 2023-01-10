export default function Service({ icon, name }) {
  return (
    <div className='single-service'>
      <span>{icon}</span>
      <article className='service-details'>
        <p className='service-name'>{name}</p>
        <p className='service-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </article>
    </div>
  )
}
