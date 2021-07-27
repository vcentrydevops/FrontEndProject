import React from 'react'
import NavBar from '../NavBar/NavBar'
import Technology from './Technology'

export default function Infor() {
    return (
        <div>
            <NavBar pageName="Infor" navLink="/tech/infor"></NavBar>
            <Technology heading="Infor" img={require('../Images/tech/infor.jpg').default}>
                <p>Amtex Info Solutions provides end-to-end solutions across a spectrum of business processes – ranging from consulting to technical services. The Amtex Info Solutions–Infor practice provides implementation, upgrades, modernization, and maintenance services for the Infor product range. With extensive industry experience in the enterprise solution space, we implement Infor products and solutions seamlessly. Implementations can be carried out on the cloud and/or on-premise. Our global delivery model, combined with our proven implementation methodology, helps clients achieve business objectives much faster.</p>
                <p>We leverage our extensive experience of helping global companies address their critical business challenges to help our clients achieve maximum value from their Infor ERP/Baan implementations.</p>
            </Technology>
        </div>
    )
}
