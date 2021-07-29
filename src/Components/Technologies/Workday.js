import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Workday() {
    return (
        <div>
            <NavBar pageName="Workday" navLink="/tech/workday"></NavBar>
            <Technology heading="Workday" img={require('../Images/tech/workday.jpg').default}>
                <p>Grovita Technology offers Specialized Workday Consulting Services through its independent entity – Opalforce Inc. Opalforce is Workday Specialist offering our clients smart solutions that transform their HR systems & processes into a hyper-efficient business organism. Our specialists have implemented, updated, integrated Workday solutions at client locations across North America and India. We believe Workday is a critical investment that all our clients must make in order to free their HR Functions from the clutter of administration. The increasingly positive feedback from our clients has given us the confidence to pursue a proactive focus on Financials Management, Student and Cloud Solutions by Workday.</p>
            </Technology>
        </div>
    )
}
