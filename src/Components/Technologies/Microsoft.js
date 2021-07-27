import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Microsoft() {
    return (
        <div>
            <NavBar pageName="Microsoft" navLink="/tech/microsoft"></NavBar>
            <Technology heading="Microsoft" img={require('../Images/tech/microsoft.png').default}>
                <p>Amtex Info Solutions Microsoft Platform-based service offerings provide the necessary infrastructure, products, and tools to build and deploy innovative business solutions that help adopt newer technologies, enhance employee productivity and provide deep insights into business performance, thereby increasing the ROI while minimizing the TCO.</p>
                <p>With our global team of engineers and consultants, Amtex Info Solutions specializes in guiding even the most complex implementations of this software. We are experts in both its functional operation and how it’s used to solve business problems in the retail, public sector, manufacturing, logistics and service sectors.</p>
            </Technology>
        </div>
    )
}
