import React from 'react'
import TestingCommon from './TestingCommon'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function FunctionalTesting() {
    return (
        <div>
            <NavBar pageName="Functional Testing" navLink="/functional_testing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Functional Testing">
                    <p>As the name declares, functional testing is a software testing process that ensures the working of product for basic business functionalities after confirming the presence of its functional requirements. Evaluating and reviewing each function of the product with the defined business requirement, we test the credibility of the software in providing the required output to the end-user. While reviewing the product with mandated user acceptance tests like smoke testing, white box testing, black box testing, unit testing, and many others, existing tools like Selenium, Telerik Test Studio, Coded UI Test, UFT (11.5 of Quick Test Professional - QTP), Sahi, TimeShiftX, and others are used by our expert testing teams. Thus, promising a reliable functional testing we cater perfection from the basics.</p>
                </ServiceComponent>
            </div>
            <TestingCommon></TestingCommon>
        </div>
    )
}
