import React from 'react'
import './ApplicationSecurity.css'
import NavBar from '../../NavBar/NavBar'

export default function ApplicationSecurity() {
    return (
        <div className="app-sec-cont">
            <NavBar pageName="Application Security" navLink="/solution/appliction_security"></NavBar>
            <div className="aboutus-cont appliction-sec-cont app-sec-firstdiv">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Application Security</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Grovita Technology Application Security Solution establishes a continuous process that ensures security verification and remediation tasks are not only deployed across every stage of the SDLC, but also ingrained into the team's workflow.</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Out-of-the-box support for key security standards and initiatives</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                      <p>Delivers an instant assessment of compliance to:</p>
                      <ul>
                          <li><p>PCI DSS</p></li>
                          <li><p>OWASP</p></li>
                          <li><p>CWE/SANS</p></li>
                          <li><p>NIST SAMATE</p></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Facilitate issue remediation, not just issue detection</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Each issue detected is prioritized, automatically correlated to the developer who introduced it, then distributed to his or her IDE with direct links to the problematic code and a description of how to remediate it. Eventually, developers start writing more secure code as a matter of habit.</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Extensive, centralized reporting</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Our centralized reporting system provides real-time visibility into overall security status and processes, documents improvements, and helps you determine what additional actions are needed to safeguard security.</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Policy establishment, application, and monitoring</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Grovita Technology policy-based approach establishes the organization's expectations for quality, leverages an automated infrastructure to ensure consistent, unobtrusive policy application, and automatically monitors policy compliance for visibility and auditability.</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Easy policy configuration</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>The extensive, continually-expanding knowledge base of rules can be easily customized (graphically, without coding) to enable automated monitoring of custom best practices. The result is more realistic and accurate validation that is aligned with the team's security priorities.</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Integration into the workflow and across the SDLC</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Grovita Technology establishes a continuous security process that ensures compliance tasks begin early and are deployed across every stage of the SDLC, as recommended by the PCI DSS. We've learned that even the best tool eventually becomes shelf ware if it is not integrated into a sustainable process. To ensure that the security process remains on track and does not disrupt project progress, Grovita Technology ingrains compliance tasks into the team's existing workflow and automates them so team members can focus on tasks that truly require human intelligence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
