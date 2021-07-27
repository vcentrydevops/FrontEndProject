import React from 'react'

export default function Technology(props) {
    const {heading,children,img} = props
    return (
        <div>
            <div className="technical-cont">
                <div className="technical-div1">
                    <img src={img} alt="sap"></img>
                </div>
                <div className="aboutus-head technical-div2" >
                    <div className="about-heading">
                        <h3>{heading}</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}
