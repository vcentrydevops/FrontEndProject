import React from 'react'
import NavBar from '../../NavBar/NavBar'
import MarketingCollapse from '../Collapse/MarketingCollapse'
import ServiceComponent from '../ServCommon/ServiceComponent'
import ServImgCont from '../ServCommon/ServImgCont'
import './Digital_marketing.css'
import { Accordion, Card } from 'react-bootstrap'


export default function DigitalMarketing() {
    const data = [
        {
            head: "Search Engine Optimization (SEO)",
            child: "Search Engine Optimization (SEO) services are the strategic processes to improve the visibility",
            btnName: "Know More"
        },
        {
            head: "Pay-Per-Click Advertising (PPC)",
            child: "Despite having numerous choices in Digital Marketing agencies, companies are still looking out for quality",
            btnName: "Know More"
        },
        {
            head: "Social Media Marketing (SMM)",
            child: "Analyzing the continuously growing social network influence on the market, firms are turning up",
            btnName: "Know More"
        },
        {
            head: "Content Marketing",
            child: "Firms that intend to grow their sales, create branding, improve customer base, and retain the reach",
            btnName: "Know More"
        },
        {
            head: "Conversion Rate Optimization (CRO)",
            child: "Despite registering new visitors every day, have you been through a disappointing sales result?",
            btnName: "Know More"
        },
        {
            head: "Reputation Management (ORM)",
            child: "As the online reputation turns vital in streaming online marketing effectively, a positive impression",
            btnName: "Know More"
        },
        {
            head: "App Store Optimization",
            child: "As the market for online business is immensely growing, companies are looking out for the chances",
            btnName: "Know More"
        },
        {
            head: "E-mail Marketing",
            child: "Contemplating a solid competition in the market, companies hinder themselves",
            btnName: "Know More"
        },
        {
            head: "Link Building Services",
            child: "Link building is one of the most important things that any website owner can do to improve",
            btnName: "Know More"
        }
    ]
    return (
        <div>
            <NavBar pageName="Digital Marketing" navLink="/services/digital_marketing"></NavBar>
            <div className="digital-cont1">
                <ServiceComponent img2={require('../../Images/services/digital_marketing/digital_marketing.png').default} heading="Digital Marketing">
                    <p>As the Digital marketing services are showing an immense impact on the way business is promoted and profits are catered, companies are looking for a dynamic approach to the brand requirements.</p>
                </ServiceComponent>
            </div>
            <div className="digital-cont2">
                <ServiceComponent heading="Our Prowess">
                    <ul>
                        <li><p>Analyzing the changes in digital needs of businesses, Amtex Info Solutions has been providing clients with proven Digital Marketing techniques that promise to reach their targets phenomenally.</p></li>
                        <li><p>Delivering a technology oriented and completely advanced strategic digital marketing services to the brands, we stand above all.</p></li>
                        <li><p>Having a deft in driving the most successful results for SEO, PPC, SMM, Copywriting & Content Marketing, CRO, ORM, App Store Optimization, and E-mail Marketing, our team is renowned to give the industry best services.</p></li>
                        <li><p>Evolving expertise in various channels of Digital Marketing, our client’s success acknowledges our service quality.</p></li>
                        <li><p>Thus, working on strategic partnerships with a custom approach to each customer, Amtex Info Solutions has been acquiring globally successful companies as clients till today.</p></li>
                    </ul>
                </ServiceComponent>
            </div>
            <div className="digital-cont3">
                <ServImgCont heading="Our Offerings" dataArray={data}></ServImgCont>
            </div>
            <div className="digital-cont4">
                <MarketingCollapse>
                    <Card>
                        <label>
                            <input type="radio" name="collapse" defaultChecked="true"></input>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Experienced Experts
                            </Accordion.Toggle>
                        </label>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>We are a team of 200+ highly trained and qualified professionals and are well-versed with all the major digital marketing trends. Our team includes SEO Consultants, Business Analysts, Web Designers, Web Developers, App Developers and Digital Marketers who know precisely what best suits you. Altogether, our experts plan SEO strategies keeping in mind about your exact industry and targeted clients, and deliver solutions that results in high ROI.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </MarketingCollapse>
            </div>
        </div>
    )
}
