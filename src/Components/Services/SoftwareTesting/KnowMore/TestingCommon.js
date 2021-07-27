import React from 'react'
import ServImgCont from '../../ServCommon/ServImgCont'

export default function TestingCommon() {
    const data = [
        {
            head: "Functional Testing",
            child: "As the name declares, functional testing is a software testing process that ensures the working of product for basic business functionalities after confirming.",
            img: require('../../../Images/services/software_testing/functional_testing.png').default,
            btnName: "Know More",
            url:"functional_testing"
        },
        {
            head: "Automation Testing",
            child: "Over the past productive years, our Testing and QA Services focused on increasing the test efficiency and develop the value of software.",
            img: require('../../../Images/services/software_testing/automation_testing.png').default,
            btnName: "Know More",
            url:"automation_testing"
        },
        {
            head: "Security Testing",
            child: "Witnessing a large number of privacy breaches firms are facing today; security testing has owned a pivotal importance in company's development strategy.",
            img: require('../../../Images/services/software_testing/security_testing.png').default,
            btnName: "Know More",
            url:"security_testing"
        },
        {
            head: "Mobile Application Testing",
            child: "Despite gaining a profitable commercial market, an App's success lies in retaining its quality. As an Application Testing service provider",
            img: require('../../../Images/services/software_testing/mobile_application_testing.png').default,
            btnName: "Know More",
            url:"mobile_app_testing"
        },
        {
            head: "Performance Testing",
            child: "Comparing 2 or more devices or programs in terms of their agility, efficiency, reliability, flexibility and interoperability, Performance testing",
            img: require('../../../Images/services/software_testing/performance_testing.png').default,
            btnName: "Know More",
            url:"peformance_testing"
        }
    ]
    return (
        <div className="soft-test-cont3">
            <ServImgCont heading="Our Offerings" dataArray={data}></ServImgCont>
        </div>
    )
}
