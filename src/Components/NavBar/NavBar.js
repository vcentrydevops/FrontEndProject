import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props) {
    const pageName = props.pageName
    const navLink = props.navLink
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <div className="navbar-back">
            <div>
                <p>{pageName}</p>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/" onClick={scrollUp}>Home</NavLink></li>
                    <p>/</p>
                    <li><NavLink to={navLink} onClick={scrollUp}>{pageName}</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
