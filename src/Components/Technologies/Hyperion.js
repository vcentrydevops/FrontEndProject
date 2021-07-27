import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Hyperion() {
    return (
        <div>
            <NavBar pageName="Hyperion" navLink="/tech/hyperion"></NavBar>
            <Technology heading="Hyperion" img={require('../Images/tech/hyperion.jpg').default}>
                <p>In today’s dynamic business scenario, better financial agility and accuracy assists the decision makers to align their organizations rapidly. Oracle Hyperion balances the organization’s existing measures for operational excellence and future predictability through planning, forecasting and MIS statutory reporting framework. Hyperion Enterprise Performance Management applications span from compliance with statutory reporting, financial planning and MIS reporting. These applications ensure compatibility with oracle as well as non-oracle transaction systems and seamlessly integrate among each other.</p>
                <p>Amtex Info Solutions Oracle Hyperion Practice engages with customers in all these applications in advisory, consultative, implementation and support roles. In-house solutions are built using best practices and industry expertise to accelerate a typical implementation cycle.</p>
            </Technology>
        </div>
    )
}
