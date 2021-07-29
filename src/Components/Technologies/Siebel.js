import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Siebel() {
    return (
        <div>
            <NavBar pageName="Siebel" navLink="/tech/siebel"></NavBar>
            <Technology heading="Siebel" img={require('../Images/tech/siebel.jpg').default}>
                <p>Our experienced Siebel CRM team provides first grade CRM services and solutions. Our Siebel solutions are tailored to the specific needs of companies across various industries. The CoE provides a comprehensive array of CRM services that enables your business to transform, enhance, and optimize at every stage of your CRM journey.The overall CRM ecosystem at Grovita Technology covers the entire spectrum of services ranging from CRM business strategy to technology designing, end-to-end implementations, version upgrades, data management and maintenance of all the Siebel CRM modules.</p>
                <p>Grovita Technology Siebel Center of Excellence has been delivering comprehensive Siebel services, strategies and methodologies, enabling enterprises to benefit from redundancy in applications, reduced total cost of ownership and succeed in their customer management.</p>
            </Technology>
        </div>
    )
}
