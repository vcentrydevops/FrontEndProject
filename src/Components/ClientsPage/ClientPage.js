import React from 'react'
import NavBar from '../NavBar/NavBar'
import './ClientPage.css'

export default function ClientPage() {
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
                    <img src={require('../Images/clients_image.jpg').default} alt="person logo"></img>
                </div>
            </div>
        </div>
    )
}
