import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'
import ServImgCont from '../../ServCommon/ServImgCont'

export default function DesktopApp() {
    const div1Data=[
        {head:"C#"},
        {head:"Visual C++"},
        {head:".Net (Dot Net)"},
        {head:"Visual Basic"},
        {head:"Python"},
        {head:"C++ Qt"},
        {head:"WPF"},
        {head:"Java SWING"},
        {head:"Delphi"},
        {head:"VisualAge for Java/C++"},
    ]

    const div2Data=[
        {
            head:"UI & UX Design",
            child:"We use a customized application specifically designed a testing gnose to keep away for people"
        },
        {
            head:"App Development",
            child:"We use a customized application specifically designed a testing gnose to keep away for people"
        },
        {
            head:"App Testing & QA services",
            child:"We use a customized application specifically designed a testing gnose to keep away for people"
        },
        {
            head:"Business Analysis",
            child:"We use a customized application specifically designed a testing gnose to keep away for people"
        }
    ]
    const div3Data=[
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
            <NavBar pageName="Desktop Application Development" navLink="/desktop_app_development"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Desktop Application Development">
                    <p>A Desktop Application was initially originated for standalone machines, but with the immense transformation of the internet/online business, Desktop Application Development is now witnessing a deep exploration of its applications.</p>
                    <p>While a desktop application is installed for a PC or Laptop (personal environments), web applications are accessed through the internet. Though both applications are software-based, there are few functional differences between desktop and web applications.</p>
                    <p>In reference, the latest word processors and media players can represent a typical desktop application, while the shopping cart on an e-commerce site can be referred to as a web application.</p>
                </ServiceComponent>
            </div>
            <div className="app-dev-cont3 deskapp-div1">
                <ServiceComponent heading="Why Grovita Technology">
                    <ul style={{fontWeight:500}}>
                        <li><p>Sustaining the heavy competition in the ever-evolving technology world, we at Grovita Technology retain our position at the top developing flexible engagement models for our successful clients.</p></li>
                        <li><p>Delivering a user-friendly, easy-to-operate, and strategically-effective application, we enable functionality that is feasible to upgrades and is secure over data vulnerabilities.</p></li>
                        <li><p>Our developers continuously evolve their proficiency in advanced technologies and show expertise in the latest platforms and languages.</p></li>
                        <li><p>Offering unmatched integrating standards, we vow to make your money worth with the quality in the final output.</p></li>
                        <li><p>Our desktop application development molds your ideas into products and applications while accelerating your business productivity in the market.</p></li>
                        <li><p>Our 10+ year industry expertise and technical experience in the App Development course offers exemplary quality services to our clients in customizing desktop, client-server, Intranet and Web-based applications.</p></li>
                    </ul>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="TECHNOLOGIES WE USE" dataArray={div1Data}>
                    <p>Our developers have a renowned efficiency in delivering Desktop app development service using the most advanced technologies/frameworks in the market. Thus, implementing this expertise for the client's need, we fulfill their requirements high perfection and quality. Here is a list of technologies we are using (This list constantly gets updated with the latest).</p>
                </ServImgCont>
            </div>
            <div className="mob-app-cont5 deskapp-div3">
                <ServImgCont heading="Industries we Serve" dataArray={div2Data}>
                    <p>We intuitively focus on High-performance, User convenience, and Information security while working on the app and thus, our desktop apps are agile, efficient, reliable, and secure in functionality. Grovita Technology desktop apps are flexible enough to integrate with other enterprise software and user activities, as it follows the below hierarchy with utmost prowess.</p>
                </ServImgCont>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="Industries we Serve" dataArray={div3Data}>
                    <p>Grovita Technology desktop application development service is extending its implication into various industries with an impeccable success record. Aiming to stay ahead in the aggressively growing online market, our developers are breaking the year-old list of confined industries for DAD (Desktop Application Development). As of now, we are into.</p>
                </ServImgCont>
            </div>
        </div>
    )
}
