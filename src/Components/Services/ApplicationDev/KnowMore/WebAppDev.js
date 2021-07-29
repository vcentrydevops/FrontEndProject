import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'
import ServImgCont from '../../ServCommon/ServImgCont'

export default function WebAppDev() {
    const div1Data=[
        {head:"Angular Js"},
        {head:".Net"},
        {head:"Node.JS"},
        {head:"React JS"},
        {head:"PHP"},
        {head:"Laravel"},
        {head:"Magento"},
        {head:"Vue.js"},
        {head:"CakePHP"}
    ]

    const div2Data=[
        {head:"Web Portal Development"},
        {head:"Software Development"},
        {head:"CMS Development"},
        {head:"Web UI/UX Integration"},
        {head:"Web App Support & Maintenance"}
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
            <NavBar pageName="Web Application Development" navLink="/web_app_developing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Web Application Development">
                    <p>Web App Development is the process of delivering the internet operable application to the user by drafting the application programs in their remote servers.</p>
                    <p>As the requirement for an accessible work flow in an organization is immensely growing, organizations were looking for a customized online working space i.e.., a web application that is agile and reliable.</p>
                    <p>Captivating these requirements, web application development has evolved and is still spreading its diversified applications through various frameworks.</p>
                    <p>However, the traditional web application development process includes web design, web content development, client-side/server-side scripting, and network security configuration followed by others.</p>
                </ServiceComponent>
            </div>
            <div className="app-dev-cont3">
                <ServiceComponent heading="TECHNOLOGIES WE USE">
                    <p>Our captivating record in providing Web Application Development services to our globally successful clients since 10+ years, depict our deft in it.</p>
                    <p>At Grovita Technology, we deliver engaging and eye-catching design and development using Drupal, Joomla, Magento, WordPress, and CMS frameworks.</p>
                    <p>Our creative minds at Grovita Technology are highly proficient in Express JS, React JS, Angular JS, Polymer, Ionic, and other advanced frameworks.</p>
                    <p>We not only render an expert outlook for your website but also develop it in a way that helps you reach your business targets.</p>
                    <p>We are highly esteemed for following developing methods based on client-perspective rather than the monotonous year-old industry norms in development.</p>
                </ServiceComponent>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="TECHNOLOGIES WE USE" dataArray={div1Data}>
                    <p>Staying in streamline with the latest upgrades of the most advanced and standard platforms available in the market, our developers with over 10+ years of experience, incorporate innovation with expertise.</p>
                </ServImgCont>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="Grovita Technology Offerings" dataArray={div2Data}>
                    <p>We are the most recommended for our offerings, as we have the expertise and experience that usually makes a service agile and solutions reliable for any business.</p>
                </ServImgCont>
            </div>
            <div className="mob-app-cont5">
                <ServImgCont heading="Industries we Serve" dataArray={div3Data}>
                    <p>We have been serving almost every business in various industries that are aiming to be available for the clients through online or wish to manage their work in a shared space.</p>
                </ServImgCont>
            </div>
        </div>
    )
}
