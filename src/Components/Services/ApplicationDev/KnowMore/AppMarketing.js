import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import MarketingCollapse from '../../Collapse/MarketingCollapse'
import ServiceComponent from '../../ServCommon/ServiceComponent'
import ServImgCont from '../../ServCommon/ServImgCont'
import { Card, Accordion } from 'react-bootstrap'

export default function AppMarketing() {

    const div1Data = [
        {
            head: "Google Play Store",
            child: "Search Engine Optimization is the key which makes your site more popular and gets targeted clients to you."
        },
        {
            head: "Amazon App Store",
            child: "Search Engine Optimization is the key which makes your site more popular and gets targeted clients to you."
        },
        {
            head: "iPhone App Store",
            child: "Search Engine Optimization is the key which makes your site more popular and gets targeted clients to you."
        }
    ]
    return (
        <div>
            <NavBar pageName="App Marketing Services" navLink="/app_marketing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="App Marketing Services">
                    <p>Analyzing the invigorative user potential of mobiles and applications, marketers have introduced App Store Optimization (ASO) back then, which has turned most vital today.</p>
                    <p>Online businesses are completely relying on Application marketing to take their brand/product potentially into the market today.</p>
                    <p>As the market for online business is immensely growing, companies are looking out for the chances to gather maximum user base into their clients.</p>
                    <p>Here, developing an Application that’s flexible in OS, Android, Windows and Cross-platforms is just a half-way through App business. Whereas, enhancing the App interface and optimizing its online visibility, completes the App journey towards success.</p>
                    <p>And this will need an ASO service that has a proven record of delivering successful results beyond the expectations. So, here we are…</p>
                </ServiceComponent>
            </div>
            <div className="app-dev-cont3 deskapp-div1">
                <ServiceComponent heading="Why Amtex Info Solutions">
                    <p>So, following the functionality of Search Engine Optimization (SEO) for websites, App Store Optimization (ASO) drives the rank of app in App stores which results in increased download rate.</p>
                    <p>Analyzing the credibility of your business to be visible on various platforms and get accessed to implement strategies accordingly, we develop a right ASO package for optimizing your mobile application.</p>
                    <p>And it includes the strategies that aim branding and conversion rate besides improving app ranking among the top-rate app stores be it, Google Play Store, Amazon AppStore, and iTunes etc.</p>
                    <p>Having a successful record in handling App Store Optimization services across various industry verticals, we have..,</p>
                    <ul style={{ paddingInlineStart: "55px" }}>
                        <li><p>10+ years of proven market experience working with globally successful companies.</p></li>
                        <li><p>Tools and strategies that are feasible to changes and updates and so are simple and easy to implement.</p></li>
                        <li><p>Highly qualified team of professionals with deep expertise in handling Digital Marketing Services stands as the reason for our best results.</p></li>
                        <li><p>ASO packages which are accountable besides generating desired results effectively.</p></li>
                        <li><p>Performance tracking system that continuously monitors the progress and drags in the campaign thereby alter the strategies for forthcoming results.</p></li>
                    </ul>
                    <p>Thus, aiming for a faster growth in your business, we Amtex Info Solutionsare renowned for being the best to provide On-Page and Off-Page App store optimization processes based on client’s business requirements.</p>
                </ServiceComponent>
            </div>
            <div className="app-dev-cont3 deskapp-div1">
                <ServiceComponent heading="Amtex Info Solutions ASO Approach">
                    <p>At Amtex Info Solutions, we follow the marketing approaches that ensure the best customer engagement and maximum ROI’s to our clients. Our ASO approach extends to..,</p>
                    <ul style={{ paddingInlineStart: "55px" }}>
                        <li><p>App Title</p></li>
                        <li><p>Gathering keywords that are relevant to App</p></li>
                        <li><p>Handling and Maintaining App Reviews & Ratings</p></li>
                        <li><p>Filling up App Description</p></li>
                        <li><p>Designing an App Logo</p></li>
                        <li><p>Featuring App Screenshots</p></li>
                        <li><p>Highlighting App Publisher Name</p></li>
                        <li><p>Prioritizing App Category</p></li>
                        <li><p>App optimizing link building services</p></li>
                        <li><p>Delivering Monetized YouTube Video of the App</p></li>
                    </ul>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="Our Offerings" dataArray={div1Data}>
                    <p style={{ textAlign: "start" }}>While our globally successful clients are busy in planning and managing other business tasks, we provide an exceptional assistance to them in handling their App Store Optimization services productively.</p>
                    <p style={{ textAlign: "start" }}>Thus, paying attention to the client’s requirements and aiming for his ultimate satisfaction with the results, Amtex Info Solutions has been offering ASO on</p>
                </ServImgCont>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="Here's Why People Love us The Most">
                    <div className="digital-cont4">
                        <MarketingCollapse>
                            <Card>
                                <label>
                                    <input type="radio" name="collapse" defaultChecked="true"></input>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        10+ Years of Experience
                                    </Accordion.Toggle>
                                </label>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>We, at CATT Inc have experts of over 10+ years of experience in planning successful digital marketing strategies and SEO operations for patrons coming from different industry verticals. Throughout this period, we have attained matchless technical proficiency and developed proven methodologies for delivering projects of any size and complexity within the turnaround time.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <label>
                                    <input type="radio" name="collapse"></input>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Experienced Experts
                                    </Accordion.Toggle>
                                </label>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>We are a team of 200+ highly trained and qualified professionals and are well-versed with all the major digital marketing trends. Our team includes SEO Consultants, Business Analysts, Web Designers, Web Developers, App Developers and Digital Marketers who know precisely what best suits you. Altogether, our experts plan SEO strategies keeping in mind about your exact industry and targeted clients, and deliver solutions that results in high ROI.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </MarketingCollapse>
                    </div>
                </ServImgCont>
            </div>
        </div>
    )
}
