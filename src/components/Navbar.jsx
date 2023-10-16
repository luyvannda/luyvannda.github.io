import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Luy Vannda</h3>

      <div className="social-links">

        <a href="https://github.com/luyvannda/digital-business-card" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className='github' />
        </a>

        <a href="https://twitter.com/luyvannda" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSquareXTwitter} className='twitter' />
        </a>

        <a href="https://www.linkedin.com/in/luyvannda/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
        </a>

        <a href="https://www.facebook.com/lvannda/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSquareFacebook} className='facebook' />
        </a>

      </div>
    </nav>
  )
}