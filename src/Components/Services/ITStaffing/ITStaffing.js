import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ServiceComponent from '../ServCommon/ServiceComponent'
import ServImgCont from '../ServCommon/ServImgCont'
import './ITstaffing.css'
import { NavLink } from 'react-router-dom'


export default function ITStaffing() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    const div5Data = [
        { head: "Software & Web Development/Engineering" },
        { head: "Mainframe Programming" },
        { head: "Enterprise Systems Analysis and Integration" },
        { head: "Business Analysis" },
        { head: "Software Development and Engineering" },
        { head: "Application Development and Maintenance" },
        { head: "Database Design, Development and Administration" },
        { head: "Network Engineering and Administration" },
        { head: "Help Desk and Technical Support" },
        { head: "Health IT" },
        { head: "Project Management" },
        { head: "Quality Assurance & Testing" },
        { head: "Technical Writing" },
        { head: "Systems Analysis" },
        { head: "Security" }
    ]
    return (
        <div>
            <NavBar pageName="IT Staffing Services" navLink="/services/it_staffing"></NavBar>
            <div className="digital-cont1">
                <ServiceComponent img2={require('../../Images/services/ITstaffing/it_staffing.png').default} heading="IT Staffing Services">
                    <p>In order to achieve the future Business goals, companies have to target in maintaining the pace of staying ahead of latest trends and developments while also building an agile IT talent to support growth.</p>
                    <p>Nevertheless, we need to remember that technology alone cannot leap you ahead in the competition. The ideology of utilizing that technology and the ideal user who is making the idea happen with utmost perfection also matters.</p>
                </ServiceComponent>
            </div>
            <div className="soft-test-cont2">
                <div className="serv-content-head">
                    <h3>Our Prowess</h3>
                    <div></div>
                </div>
                <ServiceComponent img1={require('../../Images/expertise.png').default}>
                    <p>Between the booming businesses, allying with an IT staffing agency that recruits trust-worthy candidates for you is highly productive.</p>
                    <p>Amtex Info Solutions IT Staffing Services provides you with the most productive and influential talents from our network that fit absolutely for your business objectives.</p>
                    <p>We begin our collaboration with you by starting a significant analysis on your present and future endeavors.</p>
                    <p>We then come up with a staffing strategy that fills the gaps and your requirements with proficient people for Design, Development/Engineering, Programming, Analysis and Integration, Maintenance, Administration, Support, Management, and Testing for various IT purposes by depicting and detailing when and where you need them.</p>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont5 staff-cont3">
                <ServImgCont heading="Our Offering" dataArray={div5Data}>
                </ServImgCont>
            </div>
            <div className="carrer-cont">
                <div className="carrer-div1">
                    <p>Career Opportunities</p>
                    <p>Looking for a trustworthy service to take your business forward?</p>
                </div>
                <div className="carrer-div2">
                    <NavLink to="/contactus" onClick={scrollUp}>Talk to our Experts</NavLink>
                </div>
            </div>
            <div className="soft-test-cont4">
                <ServiceComponent heading="What We Do">
                    <ul>
                        <li><p>Pioneering in the IT Staff Outsourcing industry, Amtex Info Solutions has a detailed portfolio of providing 10+ years service to customers.</p></li>
                        <li><p>In order to bridge the talent-demand supply gap, we use the best-in-class techniques that are extensively available for the service, which made us the most preferred IT Staff sourcing service providers for our customers around the world.</p></li>
                        <li><p>Amtex Info Solutions IT Staffing Services provides you with a vast Database of candidates that are eligible and capable for your requirement, making it easy for you to choose.</p></li>
                        <li><p>Offering a high flexibility in operations, Amtex Info Solutions IT Staffing Services regulates the costs of outsourcing.</p></li>
                        <li><p>Settling the traditional methods of IT staffing to scratch, Amtex Info Solutions owns techniques that complete the task in short hiring timelines.</p></li>
                    </ul>
                </ServiceComponent>
            </div>
        </div>
    )
}
