export default function ContactForm() {
  return (

    <div className="form-container">
      <div className="contact-form">

        <div className="form-heading">
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I&apos;ll get back to you as soon as possible.</p>
        </div>

        <form
          action="https://getform.io/f/e84d47c6-f990-424a-b7fe-56b37f894479"
          method="POST">

          <label htmlFor="name">
            <input id="name" type="text" name="name" placeholder="NAME"></input>
          </label>

          <label htmlFor="email">
            <input id="email" type="email" name="email" placeholder="EMAIL"></input>
          </label>

          <label htmlFor="message">
            <textarea id="message" name="message" rows="4" placeholder="MESSAGE"></textarea>
          </label>

          <button className="form-btn" type="submit">SEND MESSAGE</button>
        </form>
      </div>

      <img className="form-rings" src="images/pattern-rings.svg" alt="rings pattern decoration"></img>

      <div className="bottom-border"></div>
    </div>
  )
}


/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbiByqzfTtmBHAYF0tll4_XwcrHdoPWR8GEsi1pjiScK3Nlw/viewform?embedded=true" width="640" height="849" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */
