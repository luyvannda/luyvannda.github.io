import './App.scss'
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
      <section className='hero-container'>
        <ProfilePhoto />
        <Hero />
      </section>
      <Skills />
      <Projects />
    </div>
  )
}

export default App
