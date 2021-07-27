import React from 'react'
import TestingCommon from './TestingCommon'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function SecurityTesting() {
    return (
        <div>
            <NavBar pageName="Security Testing" navLink="/security_testing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Security Testing">
                    <p>Witnessing a large number of privacy breaches firms are facing today; security testing has owned a pivotal importance in company's development strategy. Uncovering the vulnerabilities in app functionality and retaining the privacy breach, our expertise testing team has turned us the most trusted Testing and QA service provider following industry best testing methodologies. Ensuring the app risks are minimized, our testing services provide data protection to the maximum levels. As part of our security testing, we provide Security Scanning, Penetration testing, Risk Assessment, Security Auditing, and Posture Assessment that discloses a trusted approval for App security.</p>
                </ServiceComponent>
            </div>
            <TestingCommon></TestingCommon>
        </div>
    )
}
