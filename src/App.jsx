import './App.scss'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProfilePhoto from './components/ProfilePhoto'

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
    </div>
  )
}

export default App
