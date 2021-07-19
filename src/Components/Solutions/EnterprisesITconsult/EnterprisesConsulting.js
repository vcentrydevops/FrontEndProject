import React from 'react'
import './EnterprisesConsulting.css'
import NavBar from '../../NavBar/NavBar'

export default function EnterprisesConsulting() {
    return (
        <div>
            <NavBar pageName="Enterprise IT Consulting" navLink="/solution/enterprise_it_consulting"></NavBar>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Enterprise IT Consulting</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Get IT consulting services that address aspects of reducing cost, increasing agility and enabling transformation. Our consulting offerings are based on an analytical approach to understand the business problems, resulting in practical recommendation and actionable plans. Our value proposition is based on a confluence of business knowledge, deep hands-on technology skills and a focused approach through the use of in-house methodologies, frameworks and tools</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>We have the following IT service offerings for the enterprise:</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                      <p>Delivers an instant assessment of compliance to:</p>
                      <ul>
                          <li><p>Enterprise process automation services</p></li>
                          <li><p>Enterprise Knowledge management services</p></li>
                          <li><p>IT Infrastructure management</p></li>
                          <li><p>Information Security consulting</p></li>
                          <li><p>Disaster management consulting</p></li>
                      </ul>
                      <p>Make your IT infrastructure reliable and available with maximum uptime. With complex environments there is an increasing threat of security breaches too and managing the infrastructure with internal resources requires huge investment. We can help you align your business objectives with your infrastructure with scalable solutions.</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Infrastructure Management</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                      <p>We offer the following services in the Infrastructure Management Sector:</p>
                      <ul>
                          <li><p>Database Administration</p></li>
                          <li><p>Data Center Operations</p></li>
                          <li><p>Web Operations</p></li>
                          <li><p>Desktop Management</p></li>
                          <li><p>Service Desk</p></li>
                          <li><p>Incident Management</p></li>
                          <li><p>Problem Management</p></li>
                          <li><p>Change Management</p></li>
                          <li><p>Configuration Management</p></li>
                          <li><p>Release Management</p></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Key Features:</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                      <ul>
                          <li><p>End-to-end capabilities to ensure flexible delivery and support that meet client-specific needs and business strategy.</p></li>
                          <li><p>Shared services model that delivers economies of scale, improves ROI and reduces TCO.</p></li>
                          <li><p>Solution built on industry standards like ITIL V3.0, COBIT, and ISO.</p></li>
                          <li><p>IT transformation expertise to align IT strategy and short- and long-term business objectives.</p></li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
