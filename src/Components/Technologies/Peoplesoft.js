import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Peoplesoft() {
    return (
        <div>
            <NavBar pageName="Peoplesoft" navLink="/tech/peoplesoft"></NavBar>
            <Technology heading="Peoplesoft" img={require('../Images/tech/peoplesoft.jpg').default}>
                <p>In today’s complex business operations, we understand the need of adopting new technologies to simplify the business processes and strive to fulfill this need. Amtex Info Solutions PeopleSoft solutions are well designed to meet all our clients’ complex business requirements that enable organizations to seed up business productivity, improve operational efficiencies and increase ROI.</p>
                <p>As an Oracle gold partner, our PeopleSoft domain services leverages your enterprise advantages with highest level of customer satisfaction. We have remarkable experience in designing, implementation, maintenance, testing, upgrades and customization of all PeopleSoft modules that includes HRMS, FMS, CRM, SCM and EPM. Our experts are aimed at quick adoption and competency building on the newest versions of PeopleSoft applications.</p>
            </Technology>
        </div>
    )
}
