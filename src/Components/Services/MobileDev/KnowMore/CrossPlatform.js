import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import MobCommon from './MobCommon'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function WindowsMobApp() {
    return (
        <div>
            <NavBar  pageName="Cross-Platform Application Services" navLink="/cross_platform_app"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Cross-Platform Application Services">
                    <p>While experiencing a competition among a myriad of mobile application platforms, cross-platform app came-in as a service that supports and satisfies the demands of multiple mobile devices.</p>
                    <p>With a detailed prowess in Application Development Services, Grovita Technology is providing cost-effective, time-saving and reliable cross-platform application services over the cost-binding native apps since then.</p>
                    <p>Our expert team possesses proficiency in HTML5, CSS3, & Javascript to work on Ember.js, React native, Oracle maf, Ionic, Cordova, Kony, SproutCore, Sencha, Angular.js, Xamarin and other Cross-Platform App Development frameworks.</p>
                    <p>Thus, providing best End-to-End mobility, UX/UI design, App Porting, Testing QA, App maintenance & support, and App marketing services for Cross-platform Applications Grovita Technology holds the trust of globally successful companies since 10 years.</p>
                </ServiceComponent>
            </div>
            <MobCommon></MobCommon>
        </div>
    )
}
