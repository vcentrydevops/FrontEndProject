import React from 'react'
import NavBar from '../../NavBar/NavBar'
import './WebContent.css'

export default function WebContent() {
    return (
        <div>
            <NavBar pageName="Web Content Management" navLink="/solution/webcontentmanagement"></NavBar>
            <div className="aboutus-cont webcontent-cont">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Web Content Management</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                        <p>Amtex Info Solutions Web Content Management solutions provide a rich environment for creating, managing, and publishing Web content, and an infrastructure for supporting multiple sites.</p>
                        <p>Because users of Web Content Management systems are generally non-technical business users or subject matter experts who are unfamiliar with HTML syntax, Amtex Info Solutions include easy-to-use inline editors for text, HTML, and XML content, and connectors for editing documents using a variety of familiar desktop tools.</p>
                    </div>
                </div>
                <div className="webcontent-img">
                    <img src={require('../../Images/solutions/web_content_management.png').default} alt="web-content-management"></img>
                </div>
            </div>
            <div className="aboutus-cont aboutpage-acont2 webcontent-cont2">
                <div className="about-content aboutpage-acontent">
                    <p>For formatting simplicity, we include a transformation engine that converts content from one format to another. For example, incoming images of various types and sizes can be converted to a standard format and size. Drag-and-drop layout lets users customize the look and feel of a Web site without waiting for assistance from developers, and granular control over security enables content authors to secure web pages and the files, images, and videos embedded in them.</p>
                    <p>Amtex Info Solutions Web Content Management solutions provide content management and search capabilities for over 35 languages, including the right-to-left languages such as Arabic and Hebrew. A robust full text search engine supports metadata and keyword searches, and returns results based on the user's access permissions.</p>
                </div>
            </div>
            <div className="aboutus-cont buisness-cont2 webcontent-cont3">
                <div className="aboutus-head">
                    <div className="about-heading">
                        <h3>Key features</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <ul>
                            <li><p>Standards-based forms to create content</p></li>
                            <li><p>Email based workflow and approval process</p></li>
                            <li><p>In context review: View changes in context of live site</p></li>
                            <li><p>Pre-built templates: Websites and website components</p></li>
                            <li><p>Integration of enterprise systems</p></li>
                            <li><p>Re-use existing sites: Easily reuse existing look and feel</p></li>
                            <li><p>High-availability, fault tolerance, and scalability: Any number of sites, auto failover, and clustering of the delivery tier</p></li>
                            <li><p>Multi-site change set management: Support for projects, sandboxes, changes sets, layers, and snapshots</p></li>
                            <li><p>Preview feature with presentation templates</p></li>
                            <li><p>Management of web assets</p></li>
                            <li><p>Brand management</p></li>
                            <li><p>Digital Image Library</p></li>
                            <li><p>Mobile device support</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
