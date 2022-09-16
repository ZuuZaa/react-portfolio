import emailjs from '@emailjs/browser'
import AnimatedLetters from 'components/AnimatedLetters'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import './style.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animated')
  const strAttay = ['C', 'o', 'n', 't', 'a', 'c ', 't', ' ', 'm', 'e']
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(refForm.current)
    emailjs
      .sendForm(
        'service_j64nkm7',
        'template_1i755sd',
        refForm.current,
        'UeUnnRih9i9m7YTOs'
      )
      .then(
        () => {
          alert('Message successfully sent.')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animated-hover')
    }, 3000)
  })
  return (
    <div className="main-container contact-page">
      <div className="text-zone">
        <span className="tags">&lt;h1&gt;</span>
        <h1>
          <AnimatedLetters
            strArray={strAttay}
            letterClass={letterClass}
            index={15}
          />
        </h1>
        <span className="tags">&lt;/h1&gt;</span>
        <form
          action=""
          className="contact-form"
          ref={refForm}
          onSubmit={sendEmail}
        >
          <ul>
            <span className="organiser">
              <li>
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li>
                <input type="email" name="email" placeholder="Email" required />
              </li>
            </span>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>
            <li>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
      <div className="map-zone">map</div>
    </div>
  )
}

export default Contact
