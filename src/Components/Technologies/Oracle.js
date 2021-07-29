import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Technologies.css'
import Technology from './Technology'

export default function Oracle() {
    return (
        <div>
            <NavBar pageName="Oracle" navLink="/tech/oracle"></NavBar>
            <Technology heading="Oracle" img={require('../Images/tech/oracle.jpg').default}>
                <p>At the Oracle practice in Grovita Technology we combine the power of Oracle’s best-of-breed products with our depth and breadth of expertise and a solutions and metrics-driven approach to deliver measurable business value to clients. We have invested significantly in creating new offerings that help overcome the challenges facing most enterprises today.</p>
                <p>Our clients leverage our expertise in consulting, technology, and sourcing to transform their businesses and create outcomes in three key areas – business transformation, accelerated innovation, and efficient operations. Grovita Technology has extensive experience in many Oracle economy products and has set up dedicated centers of excellence (CoEs). These centers have experienced resources with extensive product and industry knowledge.</p>
            </Technology>
        </div>
    )
}
