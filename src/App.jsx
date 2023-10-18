import './App.scss'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProfilePhoto from './components/ProfilePhoto'
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

      <section>
        <Skills />
      </section>

    </div>
  )
}

export default App
