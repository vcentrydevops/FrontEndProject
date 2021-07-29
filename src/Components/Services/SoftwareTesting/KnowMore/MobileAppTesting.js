import React from 'react'
import TestingCommon from './TestingCommon'
import NavBar from '../../../NavBar/NavBar'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function MobileAppTesting() {
    return (
        <div>
            <NavBar pageName="Mobile Application Testing" navLink="/mobile_app_testing"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Mobile Application Testing">
                    <p>Despite gaining a profitable commercial market, an App's success lies in retaining its quality. As an Application Testing service provider, we review App functionality, usability and consistency with standard manual and automated testing methods, using competitive testing tools like Appium, Calabash, Frank iOS, Monkey Talk, Robotium, Selendroid, KeepItFunctional (KIF), EarlGrey, Ranorex, and EggPlant, that are feasible with native, hybrid and web applications. Thus, providing a customer centric Mobile Application Testing service, Grovita Technology Testing and Quality Assurance team is renowned for growing customer's user base through a flawless and personalized application User experience.</p>
                </ServiceComponent>
            </div>
            <TestingCommon></TestingCommon>
        </div>
    )
}
