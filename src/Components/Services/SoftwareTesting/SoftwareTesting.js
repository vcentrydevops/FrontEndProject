import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ServiceComponent from '../ServCommon/ServiceComponent'
import { NavLink } from 'react-router-dom'
import './software_testing.css'
import ServImgCont from '../ServCommon/ServImgCont'

export default function SoftwareTesting() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    const data = [
        {
            head: "Functional Testing",
            child: "As the name declares, functional testing is a software testing process that ensures the working of product for basic business functionalities after confirming.",
            img: require('../../Images/services/software_testing/functional_testing.png').default,
            btnName: "Know More",
            url:"functional_testing"
        },
        {
            head: "Automation Testing",
            child: "Over the past productive years, our Testing and QA Services focused on increasing the test efficiency and develop the value of software.",
            img: require('../../Images/services/software_testing/automation_testing.png').default,
            btnName: "Know More",
            url:"automation_testing"
        },
        {
            head: "Security Testing",
            child: "Witnessing a large number of privacy breaches firms are facing today; security testing has owned a pivotal importance in company's development strategy.",
            img: require('../../Images/services/software_testing/security_testing.png').default,
            btnName: "Know More",
            url:"security_testing"
        },
        {
            head: "Mobile Application Testing",
            child: "Despite gaining a profitable commercial market, an App's success lies in retaining its quality. As an Application Testing service provider",
            img: require('../../Images/services/software_testing/mobile_application_testing.png').default,
            btnName: "Know More",
            url:"mobile_app_testing"
        },
        {
            head: "Performance Testing",
            child: "Comparing 2 or more devices or programs in terms of their agility, efficiency, reliability, flexibility and interoperability, Performance testing",
            img: require('../../Images/services/software_testing/performance_testing.png').default,
            btnName: "Know More",
            url:"peformance_testing"
        }
    ]
    return (
        <div>
            <NavBar pageName="Software Testing & QA Services" navLink="/services/software_testing"></NavBar>
            <div className="soft-test-cont1">
                <ServiceComponent img2={require('../../Images/services/software_testing/software_testing.png').default} heading="Software Testing & QA Services">
                    <p>A Quality Assurance service usually known as QA & Testing service is an assurance activity followed to declare that the product or the organization provides the best quality to customers.</p>
                    <p>Following with the development procedures, while QA focuses on the quality of the product, testing keeps a constant eye on the issues the product might or has encountered with.</p>
                </ServiceComponent>
            </div>
            <div className="soft-test-cont2">
                <div className="serv-content-head">
                    <h3>Our Expertise</h3>
                    <div></div>
                </div>
                <ServiceComponent img1={require('../../Images/expertise.png').default}>
                    <p>Delivering a budget-friendly, high-quality product within the precise time shall be the ultimate goal of any software development company.</p>
                    <p>Despite levying a strenuous effort and expertise in development, a product may face or raise functionality and operating issues and that's where a reliable Software Testing and QA service is needed.</p>
                    <p>With an extensive experience in providing trust-worthy services to our globally successful clients, Grovita Technology is renowned for our efficiency.</p>
                    <p>Verifying and validating extremely complex software products with a glitch free output, Grovita Technology is preferred amongst the most trusted companies from years.</p>
                    <p>Here's what we offer in our software testing and QA services.</p>
                </ServiceComponent>
            </div>
            <div className="soft-test-cont3">
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
            <div className="soft-test-cont4">
                <ServiceComponent heading="What We Do">
                    <ul>
                        <li><p>Grovita Technology has been offering Testing & QA Services from 10+ years, receiving accolades from the globally successful clients.</p></li>
                        <li><p>Evolving its expertise into various methods of Testing and QA Service purposes, Grovita Technology is emerging as the best in standards.</p></li>
                        <li><p>Testing your product with industry best technologies, we assure you a sustained business growth.</p></li>
                    </ul>
                </ServiceComponent>
            </div>
        </div>
    )
}
