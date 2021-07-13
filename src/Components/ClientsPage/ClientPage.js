import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './ClientPage.css'

export default function ClientPage() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <div>
            <NavBar pageName="Clients" navLink="/client"></NavBar>
            <div className="clientpage-client">
                <div className="aboutus-head" >
                    <div className="about-heading">
                        <h3>Clients</h3>
                        <div></div>
                    </div>
                </div>
                <div>
                    <img src={require('../Images/clients_image.jpg').default}></img>
                </div>
            </div>
        </div>
    )
}
