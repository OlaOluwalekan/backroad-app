import "./Hero.css"

const gotoTours = () => {
  window.location.href = "#tours"
}

export default function Hero() {
  return (
    <section className='hero' id='home'>
      <h1>continue exploring</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo
        debitis est autem dicta.
      </p>
      <button onClick={gotoTours}>explore tours</button>
    </section>
  )
}
