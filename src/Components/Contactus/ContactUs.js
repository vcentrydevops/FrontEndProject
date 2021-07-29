import React from 'react'
import './ContactUs.css'
import {FaMapMarkerAlt,FaMobileAlt,FaEnvelope} from 'react-icons/fa'
import NavBar from '../NavBar/NavBar'


export default function ContactUs() {
    return (
        <div>
            <NavBar pageName={"Contact Us"} navLink={"/contactus"}></NavBar>
            <div className="aboutus-cont contactus-cont">
                <div className="aboutus-head">
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
                                <p>Grovita Technology</p>
                                <p>Old No.74, New No. 124,</p>
                                <p>Sri Balaji Tower,</p>
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
            </div>
        </div>
    )
}
