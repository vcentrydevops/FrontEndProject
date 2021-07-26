import React, { useState, useEffect } from 'react'
import './Header.css'
import { BsList } from 'react-icons/bs'
import { BiCaretDown } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [visible, setvisible] = useState(false)
    const [handelScroll, sethandelScroll] = useState()
    const visibility = () => {
        setvisible(!visible)
    }
    const scrolling = () => {
        const scroll = window.scrollY
        if (scroll > 200) {
            sethandelScroll(true)
        } else {
            sethandelScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrolling)
    }, [])

    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <header>
            <nav className="nav-div" id={handelScroll ? "nav-div1" : "null"}>
                <div className="nav-cont">
                    <div className="nav-logo">
                        <NavLink to="/" onClick={scrollUp}>
                            <img className="com-logo" src={require('../Images/comlogo.png').default} alt="company logo"></img>
                        </NavLink>
                    </div>

                    <div className="nav-link-btn">
                        <div className="navlist-btn"><i onClick={visibility}><BsList className="icon"></BsList></i></div>
                    </div>
                </div>
                <div className="nav-links" id={visible ? "nav-links1" : "null"}>
                    <ul>
                        <li className="nav-about"><div><NavLink className="navlink-btn" to="/about" onClick={scrollUp}>About us</NavLink></div></li>
                        <li className="nav-service navlink-menu">
                            <div><p className="navlink-btn navlink-btn1">Services<i><BiCaretDown className="navlink-btn-icon"></BiCaretDown></i></p></div>
                            <div className="navlinks-div">
                                <NavLink to="/services/application_development" onClick={scrollUp}>Application Development</NavLink>
                                <NavLink to="/services/mobile_app_development" onClick={scrollUp}>Mobile App Development</NavLink>
                                <NavLink to="/services/software_testing" onClick={scrollUp}>Software Testing and QA Services</NavLink>
                                <NavLink to="/services/digital_marketing" onClick={scrollUp}>Digital Marketing Services</NavLink>
                                <NavLink to="/services/it_infrastructure" onClick={scrollUp}>IT Infrastructure Services</NavLink>
                                <NavLink to="/services/it_staffing" onClick={scrollUp}>IT Staffing Services</NavLink>
                            </div>
                        </li>
                        <li className="nav-solution navlink-menu"><div><p className="navlink-btn navlink-btn1">Solutions<i><BiCaretDown className="navlink-btn-icon"></BiCaretDown></i></p></div>
                            <div className="navlinks-div">
                                <NavLink to="/solution/portals_social_collaboration" onClick={scrollUp}>Portal & Social Collaboration</NavLink>
                                <NavLink to="/solution/webcontentmanagement" onClick={scrollUp}>Web Content Management</NavLink>
                                <NavLink to="/solution/digital_asset_management" onClick={scrollUp}>Digital Asset Management</NavLink>
                                <NavLink to="/buisness_intel" onClick={scrollUp}>Buisness Intelligence</NavLink>
                                <NavLink to="/solution/appliction_security" onClick={scrollUp}>Application Security</NavLink>
                                <NavLink to="/solution/enterprise_it_consulting" onClick={scrollUp}>Enterprise IT Consulting</NavLink>
                                <NavLink to="/solution/quality_is_our_core" onClick={scrollUp}>Quality is our Core</NavLink>
                            </div>
                        </li>
                        <li className="nav-technology navlink-menu"><div><p className="navlink-btn navlink-btn1">Technologies<i><BiCaretDown className="navlink-btn-icon"></BiCaretDown></i></p></div>
                            <div className="navlinks-div">
                                <NavLink to="/tech/oracle" onClick={scrollUp}>Oracle</NavLink>
                                <NavLink to="/tech/sap" onClick={scrollUp}>SAP</NavLink>
                                <NavLink to="/tech/infor" onClick={scrollUp}>Infor</NavLink>
                                <NavLink to="/tech/microsoft" onClick={scrollUp}>Microsoft</NavLink>
                                <NavLink to="/tech/workday" onClick={scrollUp}>Workday</NavLink>
                                <NavLink to="/tech/peoplesoft" onClick={scrollUp}>Peoplesoft</NavLink>
                                <NavLink to="/tech/jdedwards" onClick={scrollUp}>JD Edwards</NavLink>
                                <NavLink to="/tech/hyperion" onClick={scrollUp}>Hyperion</NavLink>
                                <NavLink to="/buisness_intel" onClick={scrollUp}>Buisness Intelligence</NavLink>
                                <NavLink to="/tech/siebel" onClick={scrollUp}>Silebel</NavLink>
                            </div>
                        </li>
                        <li className="nav-client"><div><NavLink className="navlink-btn" to="/client" onClick={scrollUp}>Client</NavLink></div></li>
                        <li className="nav-carrer"><div><NavLink className="navlink-btn" to="/careers" onClick={scrollUp}>Careers</NavLink></div></li>
                        <li className="nav-contact"><div><NavLink className="navlink-btn" to="/contactus" onClick={scrollUp}>Contact us</NavLink></div></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
