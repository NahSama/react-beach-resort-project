import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MapContainer from './MapContainer'

export default function Footer() {
    return (
        <footer>
            <div className="footer-distributed">         
                <div className="footer-left">
                    <h3>Resort</h3>
                    <p className="footer-links"></p>
                    <MapContainer className="map"/>
                </div>
                <div className="footer-center">
                    <div>
                        <FontAwesomeIcon icon="map-marker" />
                        <p><span>30 Changi Road</span> Sentosa island, Singapore</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="phone" /> 
                        <p>8888 4444</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="envelope" /> 
                        <p><a href="mailto:support@company.com">hoangnguyendinh1107@gmail.com</a></p>
                        <p className="footer-company-name">Copyright to Hoang Nguyen © 2020</p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the resort</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div className="footer-icons">
                        <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href="https://www.linkedin.com/in/hoangnguyendinh1107/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a href="https:/github.com/NahSama"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
