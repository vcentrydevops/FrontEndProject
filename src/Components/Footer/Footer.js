import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <footer className="foot-cont">
            <div className="footdiv-logo">
                <img src={require('../Images/comlogo.png').default} alt="company logo"></img>
                <div className="footer-icon">
                    <NavLink to="/contactus" onClick={scrollUp}><i><FaFacebookF></FaFacebookF></i></NavLink>
                    <NavLink to="/contactus" onClick={scrollUp}><i><FaTwitter></FaTwitter></i></NavLink>
                    <NavLink to="/contactus" onClick={scrollUp}><i><FaInstagram></FaInstagram></i></NavLink>
                    <NavLink to="/contactus" onClick={scrollUp}><i><FaLinkedinIn></FaLinkedinIn></i></NavLink>
                </div>
            </div>
            <div className="footdiv-serv">
                <div className="fs-head">
                    <p>Services</p>
                    <div className="fsh-hr"></div>
                </div>
                <div className="fs-list">
                    <ul>
                        <li><NavLink to="/services/application_development" onClick={scrollUp}>Application Development</NavLink></li>
                        <li><NavLink to="/services/mobile_app_development" onClick={scrollUp}>Mobile App Development</NavLink></li>
                        <li><NavLink to="/services/software_testing" onClick={scrollUp}>Software Testing and QA Services</NavLink></li>
                        <li><NavLink to="/services/digital_marketing" onClick={scrollUp}>Digital Marketing Services</NavLink></li>
                        <li><NavLink to="/services/it_infrastructure" onClick={scrollUp}>IT Infrastructure Services</NavLink></li>
                        <li><NavLink to="/services/it_staffing" onClick={scrollUp}>IT Staffing Services</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="footdiv-serv">
                <div className="fs-head">
                    <p>Solutions</p>
                    <div className="fsh-hr"></div>
                </div>
                <div className="fs-list">
                    <ul>
                        <li><NavLink to="/solution/portals_social_collaboration" onClick={scrollUp}>Portal & Social Collaboration</NavLink></li>
                        <li><NavLink to="/solution/webcontentmanagement" onClick={scrollUp}>Web Content Management</NavLink></li>
                        <li><NavLink to="/solution/digital_asset_management" onClick={scrollUp}>Digital Asset Management</NavLink></li>
                        <li><NavLink to="/buisness_intel" onClick={scrollUp}>Buisness Intelligence</NavLink></li>
                        <li><NavLink to="/solution/appliction_security" onClick={scrollUp}>Application Security</NavLink></li>
                        <li><NavLink to="/solution/enterprise_it_consulting" onClick={scrollUp}>Enterprise IT Consulting</NavLink></li>
                        <li><NavLink to="/solution/quality_is_our_core" onClick={scrollUp}>Quality is our Core</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="footdiv-serv">
                <div className="fs-head">
                    <p>CONTACT INFO</p>
                    <div className="fsh-hr"></div>
                </div>
                <div>
                    <div className="foot-adres">
                        <i><FaMapMarkerAlt></FaMapMarkerAlt></i>
                        <div className="adres-div">
                            <p>Grovita Technology</p>
                            <p>Old No.74, New No. 124, Sri Balaji Tower,</p>
                            <p>Mount Road,</p>
                            <p>Guindy,</p>
                            <p>Chennai – 600032.</p>
                        </div>
                    </div>
                    <div className="foot-adres foot-phone">
                        <i><FaMobileAlt></FaMobileAlt></i>
                        <div>
                            <p>044-46310899</p>
                        </div>
                    </div>
                    <div className="foot-adres foot-phone">
                        <i><FaEnvelope></FaEnvelope></i>
                        <div>
                            <p>info@grovitatechnology.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-div">
                <p>Copyright 2019 © <NavLink to="/" onClick={scrollUp}>grovitatechnology</NavLink>. Designed by <NavLink to="/">VCentry Technologies</NavLink></p>
            </div>
        </footer>
    )
}
