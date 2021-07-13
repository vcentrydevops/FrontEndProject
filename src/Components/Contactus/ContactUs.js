import React from 'react'
import './ContactUs.css'
import {FaMapMarkerAlt,FaMobileAlt,FaEnvelope} from 'react-icons/fa'
import NavBar from '../NavBar/NavBar'


export default function ContactUs() {
    return (
        <div>
            <NavBar pageName={"Contact Us"} navLink={"/contactus"}></NavBar>
            <div className="aboutus-cont">
                <div className="aboutus-head contact-ls">
                    <div className="about-heading">
                        <h3>Get in Touch</h3>
                        <div></div>
                    </div>
                    <div className="contactus-form">
                        <form>
                            <input type="text" placeholder="Enter Name"></input>
                            <input type="text" placeholder="Enter Email"></input>
                            <input type="text" placeholder="Subject"></input>
                            <input type="number" placeholder="Enter Phone Number"></input>
                            <textarea placeholder="Enter Your Message"></textarea>
                            <input className="cont-submit-btn" type="submit" value="Send Message"></input>
                        </form>
                    </div>
                </div>
                <div className="footdiv-serv contactus-address">
                    <div className="fs-head">
                        <p>CONTACT INFO</p>
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
            </div>
        </div>
    )
}
