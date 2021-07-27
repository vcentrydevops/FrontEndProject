import React from 'react'
import './appDev.css'
import NavBar from '../../NavBar/NavBar'
import ServiceComponent from '../ServCommon/ServiceComponent'
import { NavLink } from 'react-router-dom'
import ClientCarousels from '../../ClientCarousel/ClientCarousels'
import ServImgCont from '../ServCommon/ServImgCont'

export default function ApplicationDev() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    const data = [
        {
            head: "Web App Development",
            child: "Developing a solution for flexible, user-centric and highly responsive web application...",
            img: require('../../Images/services/webAppDev.png').default,
            btnName: "Know More",
            url:"web_app_developing"
        },
        {
            head: "Mobile App Development",
            child: "Mobile App Development turned up to be among the basic necessaries for any business...",
            img: require('../../Images/services/mobileAppDev.png').default,
            btnName: "Know More",
            url:"services/mobile_app_development"
        },
        {
            head: "Desktop App Development",
            child: "While experiencing a competition among a myriad of mobile application platforms...",
            img: require('../../Images/services/deskAppdev.png').default,
            btnName: "Know More",
            url:"desktop_app_development"
        },
        {
            head: "App Marketing Services",
            child: "As the market for online business is immensely growing, companies are looking...",
            img: require('../../Images/services/appMarketing.png').default,
            btnName: "Know More",
            url:"app_marketing"
        }
    ]
    return (
        <div>
            <NavBar pageName="Application Development" navLink="/services/application_development"></NavBar>
            <div className="app-dev-cont1">
                <ServImgCont heading="Our Offerings" dataArray={data}></ServImgCont>
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
            <div className="app-dev-cont3">
                <ServiceComponent heading="What We Do">
                    <p>Amtex Info Solutions has been offering Application Development Services from 10+ years, receiving accolades from globally successful clients.</p>
                    <p>Spreading its development wings into various application development platforms for different app business purposes, Amtex Info Solutions has evolved its expertise progressively.</p>
                    <p>Offering native and cross-platform desktop application services, we analyze, design, develop, deploy and market your application with the industry best practices that accelerate your business.</p>
                    <p>Developing a simple, effective, and an advanced Desktop Application that works offline, our deep knowledge and customer-centric approach in developing it has been satisfying the client's requirements so far.</p>
                </ServiceComponent>
            </div>
            <div>
                <ClientCarousels></ClientCarousels>
            </div>
        </div>
    )
}
