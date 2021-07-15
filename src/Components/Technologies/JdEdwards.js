import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function JdEdwards() {
    return (
        <div>
            <NavBar pageName="JD Edwards" navLink="/tech/jdedwards"></NavBar>
            <Technology heading="JD Edwards" img={require('../Images/tech/jd_edwards.jpg').default}>
                <p>Our JDE services cover the entire end to end implementation process that includes analysis, evaluation, integration, implementation, customization, rollouts and migration of new technologies. Our services will help you to improve business practices and leverage your workforce by using JD Edward applications.</p>
                <p>We have worked on numerous versions of JD Edwards products that include World (AS/400), One World (CNC) and Enterprise One. We provide functional and technical experts with proven methodologies and experience in delivering competitive and quality services to our clients. Our consultant will help you to adopt the latest technologies and modules of JD Edwards to leverage your enterprise advantage.</p>
            </Technology>
        </div>
    )
}
