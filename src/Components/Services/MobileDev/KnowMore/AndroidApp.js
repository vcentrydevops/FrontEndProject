import React from 'react'
import NavBar from '../../../NavBar/NavBar'
import MobCommon from './MobCommon'
import ServiceComponent from '../../ServCommon/ServiceComponent'

export default function AndroidApp() {
    return (
        <div>
            <NavBar  pageName="Android Application Services" navLink="/android_application"></NavBar>
            <div className="app-dev-cont3 know-cont1">
                <ServiceComponent heading="Android Application Services">
                 <p>Orienting into App Development since the origin of the open source operating system, our developers were adept in offering customized Android App Development Services for various business verticals. Amtex Info Solutions Developers dexterous efforts in forming as the best Application Development Company can be acknowledged from our astonishingly illustrated Android Applications. Also, providing services related to UX/UI Design, App Testing QA, App Support & Maintenance based on different languages and IDEs like Adobe Flash (Flash/AIR), Ruboto (Ruby), Xamarin 2.0 (C#), and Scripting Layer for Android (Python, Perl, etc.), Amtex Info Solutions acclaimed for its most reliable Android App Development Services above all.</p>
                </ServiceComponent>
            </div>
            <MobCommon></MobCommon>
        </div>
    )
}
