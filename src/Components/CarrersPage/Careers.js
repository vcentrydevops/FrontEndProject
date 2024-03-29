import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Careers.css'

export default function Carrers() {
    const [jobs] = useState([
        "Application Development",
        "Mobile App Development",
        "Software Testing and QA Services",
        "Digital Marketing Services",
        "IT Infrastructure Services",
        "IT Staffing Services"
    ])
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    const jobsDiv = jobs.map((jobname) => {
        return <div key={jobname}>
            <p>{jobname}</p>
            <div className="main-btn view-btn"><NavLink to="/" onClick={scrollUp}>View</NavLink></div>
        </div>
    })
    return (
        <React.Fragment>
            <NavBar pageName="Careers" navLink="/careers"></NavBar>
            <div className="carrer-div">
                <div className="serv-head">
                    <p>Choose Job Category</p>
                    <div className="hr-tag"></div>
                </div>
                <div className="carrer-job">
                    {jobsDiv}
                </div>
            </div>
        </React.Fragment>
    )
}
