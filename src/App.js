import "./App.css"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Tours from "./components/Tours/Tours"

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  )
}
