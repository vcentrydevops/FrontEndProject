import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import MobCommon from './MobCommon'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function IOSAppDev() {
    return (
        <div>
            <NavBar  pageName="IOS Application Services" navLink="/ios_app_development"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="IOS Application Services">
                  <p>In a fast pacing Application Development market, Grovita Technology is renowned for its expertise in Mobile Application Development and Marketing Services from 10+ years.</p>
                  <p>While specializing in IOS Application Development, we render you with a service expertise that has been bestowing perfection in Objective c, Swift, XCODE and other native languages to the core.</p>
                  <p>Leveraging a multi-domain experience, we conceptualize and build astonishing IOS application interfaces that are designed and developed by our industry-best UI designers and developers. Guiding you all the way through the app marketplace, our ace marketing team will make your IOS app visible and stand-out among others.</p>
                  <p>So, far Grovita Technology has extended its IOS Application Development Services into Gaming, Social media intig. , AR, Messaging, and is looking into more advanced/newly-introduced categories too.</p>
                </ServiceComponent>
            </div>
            <MobCommon></MobCommon>
        </div>
    )
}
