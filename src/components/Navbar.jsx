import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Luy Vannda</h3>

      <div className="social-links">

        <a href="https://github.com/luyvannda" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} className='github' />
        </a>

        <a href="https://twitter.com/luyvannda" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} className='twitter' />
        </a>

        <a href="https://www.linkedin.com/in/luyvannda/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
        </a>

        <a href="https://www.facebook.com/lvannda/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className='facebook' />
        </a>

      </div>
    </nav>
  )
}