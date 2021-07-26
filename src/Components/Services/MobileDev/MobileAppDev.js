import React from 'react'
import ServiceComponent from '../ServCommon/ServiceComponent'
import NavBar from '../../NavBar/NavBar'
import ServImgCont from '../ServCommon/ServImgCont'
import './mobDev.css'

export default function MobileAppDev() {
    const div4Data=[
        {
            head:"IOS App Dev",
            child:"In a fast pacing Application Development market, Amtex Info Solutions is renowned for...",
            img:require('../../Images/services/webAppDev.png').default,
            btnName:"Know More"
        },
        {
            head:"Android App Development",
            child:"Orienting into App Development since the origin of the open source operating system...",
            img:require('../../Images/services/mobileAppDev.png').default,
            btnName:"Know More"
        },
        {
            head:"Cross Platform App",
            child:"While experiencing a competition among a myriad of mobile application platforms...",
            img:require('../../Images/services/deskAppdev.png').default,
            btnName:"Know More"
        },
        {
            head:"Windows Mobile App Dev",
            child:"Developing a solution for flexible, user-centric and highly responsive web...",
            img:require('../../Images/services/appMarketing.png').default,
            btnName:"Know More"
        }
    ]

    const div5Data=[
        {head:"HEALTH & FITNESS"},
        {head:"SHOPPING & E-COMMERCE"},
        {head:"EDUCATION & E-LEARNING"},
        {head:"SPORTS & RECREATION"},
        {head:"BANKING & FINANCE"},
        {head:"TRAVEL & TOURISM"},
        {head:"MEDIA & ENTERTAINMENT"},
        {head:"FOOD & DRINK"},
        {head:"ACCOUNTING & INSURANCE"},
        {head:"AEROSPACE & INDUSTRIAL MANUFACTURING"},
        {head:"PHARMACEUTICALS"},
        {head:"TELECOMMUNICATION"}
    ]
    return (
        <div>
            {/* /services/application_development */}
            <NavBar pageName="Mobile App Development" navLink="/services/mobile_app_development"></NavBar>
            <div className="mob-app-cont1">
                <ServiceComponent img2={require('../../Images/services/mobileAppDev.png').default} heading="Mobile App Development">
                    <p>As the online market and the mobile business are on boom, Mobile Application Development is now considered to be a basic requirement for every business that targets branding in the market.</p>
                    <p>Also, with the growth of easily customizable Mobile Application Development platforms, numerous apps serving various purposes have entered into the App Market. Although these applications aren’t completely reliable, they serve the basic app functionalities for definite group of individuals.</p>
                    <p>Irked by these vulnerable & inefficient applications, business individuals are looking for a secure mobile application development service who can also deliver impenetrable dynamic interface for their users.</p>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont2">
                <ServiceComponent img1={require('../../Images/expertise.png').default} heading="Our Expertise">
                    <p>Amtex Info Solutions has delivered solutions that enabled our customers in reaching out to their business targets.</p>
                    <p>With a sort out experience in App Development, we are the next big stop for your requirement in App Design, Development, Service-support and marketing.</p>
                    <p>We use robust technologies and the most creative team to provide mobile application services for all platforms (Android, IOS, and Web).</p>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont3">
                <ServiceComponent img2={require('../../Images/aboutpage2.png').default} heading="Why Amtex Info Solutions">
                    <ul>
                        <li><p>Our creative minds at spirit Technologies have been into the Mobile App Development market from a very long time.</p></li>
                        <li><p>We have been delivering iOS Mobile App Development, Android Mobile App Development, Windows Mobile App Development, Cross-Platform Mobile App Development, and Custom Mobile App Development without registering any constant update & upgrade issues so far.</p></li>
                        <li><p>Our captivating app development results for globally successful clients since 10+ years show our endearing efforts in it.</p></li>
                        <li><p>At Amtex Info Solutions, we deliver best in standard development services using iOS, Android and Cross-platform's latest frameworks.</p></li>
                        <li><p>We not only render a fully reliable mobile application for your requirement but also optimize it in a way that helps you online, in reaching your business targets.</p></li>
                    </ul>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont4">
                <ServImgCont heading="Our Offerings" dataArray={div4Data}>
                </ServImgCont>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="Industries we Serve" dataArray={div5Data}>
                    <p>Amtex Info Solutions's desktop application development service is extending its implication into various industries with an impeccable success record. Aiming to stay ahead in the aggressively growing online market, our developers are breaking the year-old list of confined industries for DAD (Desktop Application Development). As of now, we are into.</p>
                </ServImgCont>
            </div>
        </div>
    )
}
