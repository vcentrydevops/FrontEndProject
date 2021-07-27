import React from 'react'
import ServImgCont from '../../ServCommon/ServImgCont'


export default function MobCommon() {

    const div4Data = [
        {
            head: "IOS App Dev",
            child: "In a fast pacing Application Development market, Amtex Info Solutions is renowned for...",
            img: require('../../../Images/services/webAppDev.png').default,
            btnName: "Know More",
            url: "ios_app_development"
        },
        {
            head: "Android App Development",
            child: "Orienting into App Development since the origin of the open source operating system...",
            img: require('../../../Images/services/mobileAppDev.png').default,
            btnName: "Know More",
            url: "android_application"
        },
        {
            head: "Cross Platform App",
            child: "While experiencing a competition among a myriad of mobile application platforms...",
            img: require('../../../Images/services/deskAppdev.png').default,
            btnName: "Know More",
            url: "cross_platform_app"
        },
        {
            head: "Windows Mobile App Dev",
            child: "Developing a solution for flexible, user-centric and highly responsive web...",
            img: require('../../../Images/services/appMarketing.png').default,
            btnName: "Know More",
            url: "services/mobile_app_development"
        }
    ]
    
    return (
        <div className="mob-app-cont4">
            <ServImgCont heading="Our Offerings" dataArray={div4Data}>
            </ServImgCont>
        </div>
    )
}
