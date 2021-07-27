import React from 'react'
import './QualityIsOurCore.css'
import NavBar from '../../NavBar/NavBar'

export default function QualityIsOurCore() {
    return (
        <div>
            <NavBar pageName="Quality is our Core" navLink="/solution/quality_is_our_core"></NavBar>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head app-sec-firstdiv">
                    <div className="about-heading">
                        <h3>Quality is our Core</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                       <p>Amtex Info Solutions has put together an impressive portfolio of QA and testing service offerings which are implemented to make sure that ISVs (Software Vendors) can deliver robust and dependable products to the market rapidly. Our services successfully address the usability, functionality, and performance testing aspects of the solution. We can help you with the entire product development life cycle ranging from the requirements phase, designing the test approach, tools selection, code reviews, building the test suites, test execution</p>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont appliction-sec-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Amtex Info Solutions QA Methodologies</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                      <ul>
                          <li><p>Regression Testing</p></li>
                          <li><p>Manual and Automated Testing</p></li>
                          <li><p>Ad Hoc Testing</p></li>
                          <li><p>Performance Testing</p></li>
                          <li><p>Load Testing</p></li>
                          <li><p>Compatibility Testing</p></li>
                          <li><p>Configuration Testing</p></li>
                          <li><p>Installation Testing</p></li>
                          <li><p>Custom Scripts</p></li>
                          <li><p>Integration/System Testing</p></li>
                          <li><p>Early detection of defects resulting in reduced re-work costs</p></li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
