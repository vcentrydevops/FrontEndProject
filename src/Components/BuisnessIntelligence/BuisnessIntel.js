import React from 'react'
import NavBar from '../NavBar/NavBar'
import './BuisnessIntel.css'

export default function BuisnessIntel() {
    return (
        <div>
            <NavBar pageName="Buisness Intelligence" navLink="/buisness_intel"></NavBar>
            <div className="aboutus-cont buisness-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Business Intelligence</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <p>Amtex Info Solutions has enabled more than 100 of its clients globally to cost efficiently migrate to new technologies while broadening the life cycle of their functionality rich existing legacy systems.</p>
                        <p>Projects include re-engineering software to migrate applications legacy systems to client/server architectures, to extend existing applications to the Internet, to migrate from existing applications to UNIX or Windows NT, or to update from a non-relational to a relational database technology.</p>
                    </div>
                </div>
            </div>    
            <div className="aboutus-cont buisness-cont buisness-cont2">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Amtex Info Solutions migration methodology includes:</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <ul>
                            <li><p>Migrate a legacy or existing application to a new operating environment.</p></li>
                            <li><p>Integrates Legacy Systems and new Internet driven technologies.</p></li>
                            <li><p>Replace a legacy system, moving the data from the legacy application to the new application while preserving data integrity.</p></li>
                            <li><p>Migrate systems and business logic to new architectures, languages and web-based environments.</p></li>
                            <li><p>Acquisition of new technology and functionality.</p></li>
                            <li><p>Manages and ensures systems quality and stability.</p></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}
