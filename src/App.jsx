import './App.scss'
import Navbar from './components/Navbar'
import ProfilePhoto from './components/ProfilePhoto'

function App() {

  return (
    <div className='App'>
      <header className='header'>
        <Navbar />
      </header>
      <section className='hero'>
        <ProfilePhoto />
      </section>
    </div>
  )
}

export default App
