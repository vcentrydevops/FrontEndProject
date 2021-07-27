import React from 'react'
import TestingCommon from './TestingCommon'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function AutomationTesting() {
    return (
        <div>
            <NavBar pageName="Automation Testing" navLink="/automation_testing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Automation Testing">
                    <p>Over the past productive years, our Testing and QA Services focused on increasing the test efficiency and develop the value of software. Thus, flourishing as the most preferred (Testing and QA) Automation Testing service provider among the industry best, we are renowned for our credible team and their highly reliable techniques. As part of our Automation Testing services, we have been using Selenium, Katalon Studio, UFT/QTP, Watir, TestComplete, Tricentis Tosca, Ranorex, Robot framework, and our customized automation testing frameworks to execute and finish the test cycle in the least possible time. Having an impeccable knowledge in Java, C#, Python and other languages, we automate testing services for Software, Web and Mobile Applications that aid to perfection.</p>
                </ServiceComponent>
            </div>
            <TestingCommon></TestingCommon>
        </div>
    )
}
