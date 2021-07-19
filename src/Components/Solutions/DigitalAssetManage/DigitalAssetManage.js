import React from 'react'
import NavBar from '../../NavBar/NavBar'
import './DigitalAssetManage.css'

export default function DigitalAssetManage() {
    return (
        <div>
            <NavBar pageName="Digital Asset Management" navLink="/solution/digital_asset_management"></NavBar>
            <div className="aboutus-cont buisness-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Digital Asset Management</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <p>A Digital Asset Management Software (DAM) is a single access point for all your rich digital media and its underlying metadata information throughout the extended enterprise.</p>
                        <p>Amtex Info Solutions Open Source digital asset management system centralizes storage and provides easy, efficient, enterprise access to digital assets, and allows them to be quickly repurposed, which streamlines processes and saves money.</p>
                    </div>
                </div>
            </div>    
            <div className="aboutus-cont buisness-cont buisness-cont2">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Key features</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <ul>
                            <li><p>Central repository of all corporate digital assets for effective usage</p></li>
                            <li><p>Control usage rights and restrictions based on digital rights management</p></li>
                            <li><p>Automated meta-data extraction from digital assets for Search indexing</p></li>
                            <li><p>Social Networking and User Generated Content</p></li>
                            <li><p>Mobile Games, Music and TV</p></li>
                            <li><p>Mobile Marketing and Advertising</p></li>
                            <li><p>Media Transformations to use in web or print media</p></li>
                            <li><p>Dashboard and Audit trail of digital assets usage</p></li>
                            <li><p>Integration into other corporate systems</p></li>
                            <li><p>Scalable storage with SAN and NAS</p></li>
                            <li><p>Upload and streaming of large media files</p></li>
                            <li><p>Video Players</p></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}
