import React from 'react'
import './servComponent.css'

export default function ServiceComponent(props) {
    const { img1, img2, children, heading } = props
    return (
        <div className="serv-content-cont">
            {
                img1 && <div className="serv-content-div2">
                    <img src={img1} alt={heading}></img>
                </div>
            }
            <div className="serv-content-div1">
                {heading && <div className="serv-content-head">
                    <h3>{heading}</h3>
                    <div></div>
                </div>}
                <div className="serv-d1content">
                    {children}
                </div>
            </div>
            {
                img2 && <div className="serv-content-div2">
                    <img src={img2} alt={heading}></img>
                </div>
            }
        </div>
    )
}
