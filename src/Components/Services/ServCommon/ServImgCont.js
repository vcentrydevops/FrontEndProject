import React from 'react'
import './servImgCont.css'
import { NavLink } from 'react-router-dom'

export default function ServImgCont(props) {
    const { heading, dataArray = [], children } = props
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }

    const contentDiv = dataArray.map((data) => {
        return <div className="serv-img-div" key={data.head}>
            {
                data.img && <div>
                    <img src={data.img} alt="block chain logo"></img>
                </div>
            } 
            <div>
                {data.head && <p>{data.head}</p>}
                {data.child && <p>{data.child}</p>}
                {
                    data.btnName && <div className="serv-btn-div">
                        <NavLink to="/" onClick={scrollUp}>{data.btnName}</NavLink>
                    </div>
                }
            </div>
        </div>
    })

    return (
        <div className="serv-img-cont">
            <div className="serv-img-head">
                <h3>{heading}</h3>
                <div></div>
            </div>
            {
                children && <div className="serv-img-div2">
                    {children}
                </div>
            }
            <div>
                {contentDiv}
            </div>
        </div>
    )
}
