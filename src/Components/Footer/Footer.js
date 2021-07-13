import React from 'react'
import './Footer.css'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaMapMarkerAlt,FaMobileAlt,FaEnvelope} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

export default function Footer() {
    const scrollUp=()=>{
    window.scrollTo({ top: 0})
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
                           <li><NavLink to="/" onClick={scrollUp}>Application Development</NavLink></li> 
                           <li><NavLink to="/" onClick={scrollUp}>Mobile App Development</NavLink></li> 
                           <li><NavLink to="/" onClick={scrollUp}>Software Testing and QA Services</NavLink></li> 
                           <li><NavLink to="/" onClick={scrollUp}>Digital Marketing Services</NavLink></li> 
                           <li><NavLink to="/" onClick={scrollUp}>IT Infrastructure Services</NavLink></li> 
                           <li><NavLink to="/" onClick={scrollUp}>IT Staffing Services</NavLink></li> 
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
                            <li><NavLink to="/" onClick={scrollUp}>Portal & Social Collaboration</NavLink></li>
                            <li><NavLink to="/" onClick={scrollUp}>Web Content Management</NavLink></li>
                            <li><NavLink to="/" onClick={scrollUp}>Digital Asset Management</NavLink></li>
                            <li><NavLink to="/" onClick={scrollUp}>Buisness Intelligence</NavLink></li>
                            <li><NavLink to="/" onClick={scrollUp}>Application Security</NavLink></li>
                            <li><NavLink to="/" onClick={scrollUp}>Enterprise IT Consulting</NavLink></li>
                            <li><NavLink to="/" onClick={scrollUp}>Quality is our Core</NavLink></li>
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
                            <p>Amtex Info Solution</p>
                            <p>RMZ Milenia Buisness Park.</p>
                            <p>Phase 2, Campus 4B,</p>
                            <p>No 143,6th Floor, Unit 602A,</p>
                            <p>Dr. M.G.R Road,</p>
                            <p>Kandanchavadi,</p>
                            <p>Perungudi,Chennai-600096.</p>
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
                            <p>info@amtexinfosolutions.com</p>
                        </div>
                   </div>
               </div>
           </div>
           <div className="copyright-div">
                <p>Copyright 2019 © <NavLink to="/" onClick={scrollUp}>amtexinfosolutions</NavLink>. Designed by <NavLink to="/">Venkat Nagaram</NavLink></p>
           </div>
        </footer>
    )
}
