import React from 'react'
import TestingCommon from './TestingCommon'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function PerformanceTesting() {
    return (
        <div>
            <NavBar pageName="Performance Testing" navLink="/peformance_testing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Performance Testing">
                    <p>Comparing 2 or more devices or programs in terms of their agility, efficiency, reliability, flexibility and interoperability; Performance testing verifies the credibility of that system to meet the requirements of the client. Offering best-in-class Testing and QA services, Amtex Info Solutions provides Functional and Non-Functional Testing services, as part of the Performance Testing.</p>
                    <p>While the Functional Testing includes Unit Testing, Smoke testing, Sanity testing, Integration Testing, Interface Testing, System Testing, Regression Testing, UAT and others; Non-Functional Performance Testing includes Load Testing (Volume testing), Stress Testing (Fatigue testing), Spike testing (Stress Testing), Endurance testing (Soak testing), and Scalability Testing methods.</p>
                </ServiceComponent>
            </div>
            <TestingCommon></TestingCommon>
        </div>
    )
}
