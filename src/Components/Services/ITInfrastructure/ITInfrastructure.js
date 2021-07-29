import React from 'react'
import './ITinfra.css'
import NavBar from '../../NavBar/NavBar'
import { NavLink } from 'react-router-dom'
import ServiceComponent from '../ServCommon/ServiceComponent'
import ServImgCont from '../ServCommon/ServImgCont'

export default function ITInfrastructure() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    const div4Data=[
        {
            head:"Server Management",
            child:"Grovita Technology provides services that precisely relate to IT Service Management",
            img:require('../../Images/services/ITinfra/functional_testing.png').default,
            btnName:"Know More"
        },
        {
            head:"Network Management",
            child:"Grovita Technology provides services that precisely relate to IT Service Management",
            img:require('../../Images/services/ITinfra/functional_testing.png').default,
            btnName:"Know More"
        },
        {
            head:"Application Management",
            child:"Grovita Technology provides services that precisely relate to IT Service Management",
            img:require('../../Images/services/ITinfra/functional_testing.png').default,
            btnName:"Know More"
        },
        {
            head:"Database Management",
            child:"Grovita Technology provides services that precisely relate to IT Service Management",
            img:require('../../Images/services/ITinfra/functional_testing.png').default,
            btnName:"Know More"
        }
    ]
    return (
        <div>
            <NavBar pageName="IT Infrastructure" navLink="/services/it_infrastructure"></NavBar>
            <div className="infra-cont1">
                <ServImgCont 
                heading="Despite having an optimizing business strategy and leveraging IT staff services, companies will also require efficient IT infrastructure services for an easy workflow."
                ></ServImgCont>
            </div>
            <div className="infra-cont2">
                <div className="serv-content-head">
                    <h3>Our Prowess</h3>
                    <div></div>
                </div>
                <ServiceComponent img1={require('../../Images/services/ITinfra/our_prowess.png').default}>
                    <p>Grovita Technology provides services that precisely relate to IT Service Management, Info Security, Unified Communication and Collab Initiatives with the most proficient team on the board.</p>
                    <p>We analyze, strategize and optimize your IT Infrastructure management with our techniques, aiming for a continuous progress in productivity.</p>
                    <p>We have a superior forte in offering IT infrastructure Services for 10+ years and are now capable of deploying extensive services.</p>
                </ServiceComponent>
            </div>
            <div className="infra-cont3">
                <ServImgCont heading="Our Offerings" dataArray={div4Data}>
                </ServImgCont>
            </div>
            <div className="carrer-cont app-dev-cont4">
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
                        <li><p>Pioneering in the IT Infrastructure industry, Grovita Technology has a detailed portfolio of providing 10+ years service to customers.</p></li>
                        <li><p>Offering a high flexibility in operations, Grovita Technology IT Infrastructure Services regulate the costs of outsourcing.</p></li>
                        <li><p>Settling the traditional methods of IT Infrastructure to scratch, Grovita Technology owns techniques that complete the task in short operating timelines.</p></li>
                    </ul>
                </ServiceComponent>
            </div>
        </div>
    )
}
