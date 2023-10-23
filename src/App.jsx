import './App.scss'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProfilePhoto from './components/ProfilePhoto'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='App'>
      <header className='header'>
        <Navbar />
      </header>
      <main>
        <section className='hero-container'>
          <ProfilePhoto />
          <Hero />

          <img className="rings" src="./images/pattern-rings.svg" alt="rings pattern"></img>

          <img className="circle" src="./images/pattern-circle.svg" alt="circle pattern"></img>
        </section>

        <section>
          <Skills />
          <Projects />
        </section>

        <section>
          <ContactForm />
        </section>
      </main>
      <footer className='footer'>
        <Navbar />
      </footer>
    </div>
  )
}

export default App
