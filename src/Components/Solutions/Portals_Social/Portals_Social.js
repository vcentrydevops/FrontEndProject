import React from 'react'
import NavBar from '../../NavBar/NavBar'
import './Portals_Social.css'

export default function Portals_Social() {
    return (
        <div>
            <NavBar pageName="Portals & Social Collaborations" navLink="/solution/portals_social_collaboration"></NavBar>
            <div className="aboutus-cont portal-social-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Portals & Social Collaborations</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <p>Provide a rich, interactive and secure environment for accessing, creating, sharing, and discussing online information. Application examples include Intranets, Knowledge Management, eLearning, and Client Extranets.</p>
                        <p>Amtex Info Solutions Portal and Social Collaboration solutions help organizations achieve a variety of business goals, such as better sharing of business intelligence, improved performance, and higher levels of innovation. By providing a single, comprehensive environment that connects diverse users, legacy processes, and disparate content types, we help our customers create valuable collaborative relationships that were previously impossible due to technical limitations. We extend proprietary applications, and connect people with information and each other regardless of operating system, network, or content type.</p>
                    </div>
                </div>
                <div className="portal-social-img">
                    <img src={require('../../Images/solutions/portals_social.png').default} alt="portals_social_collaboration"></img>
                </div>
            </div>
            <div className="aboutus-cont buisness-cont2 portal-social-cont2">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Key features</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <ul>
                            <li><p>Secure Single Sign On across many applications</p></li>
                            <li><p>Communities and Organizations</p></li>
                            <li><p>Scalable Service Oriented Architecture</p></li>
                            <li><p>Multi-language support</p></li>
                            <li><p>Integration with Microsoft Office tools</p></li>
                            <li><p>Wikis, Blogs, Forums, Chat, Email and Team Calendars</p></li>
                            <li><p>Activity Tracking</p></li>
                            <li><p>Integrate with social media websites</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
