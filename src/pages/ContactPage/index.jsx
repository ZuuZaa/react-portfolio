import emailjs from '@emailjs/browser'
import AnimatedLetters from 'components/AnimatedLetters'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './style.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animated');
    const strAttay = "Contact me".split("");
    const refForm = useRef();
    const position = [40.363, 49.95];

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
            <div className="map-zone">
                <div className='info'>
                    Zumrud Baghirova, <br />
                    Baku, Azerbaijan <br /> <br />
                    <span>zumbaghirova@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Zumrud lives here <br /> come over for a cup of coffee :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Contact;
