import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Sap() {
    return (
        <div>
            <NavBar pageName="SAP" navLink="/tech/sap"></NavBar>
            <Technology  heading="SAP" img={require('../Images/tech/sap.jpg').default}>
                <p>Grovita Technology as SAP certified partner offers a broad range of consulting services, designed to meet the needs and requirements of our clients. We provide SAP comprehensive business solutions to take care of every aspect of your business throughout product cycle, right from consulting, process study and implementation to maintenance and upgrades.</p>
                <p>We have experienced team of solution experts ready to work with customers in a timely and cost effective manner to derive maximum SAP benefits. Our professionals are experienced of domestic and international projects at every industry verticals. We are flexible in providing consultants for onsite, offsite or offshore projects to leverage our clients business prospects and reduce investment cost. Our experience in all industry sectors with combination of innovative experts gives us strength to meet our clients requirement faster than our competitors.</p>
            </Technology>
        </div>
    )
}
