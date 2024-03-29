import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

const MarketingCollapse = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <label>
                    <input type="radio" name="collapse"></input>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Experienced Experts
                    </Accordion.Toggle>
                </label>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>We are a team of 200+ highly trained and qualified professionals and are well-versed with all the major digital marketing trends. Our team includes SEO Consultants, Business Analysts, Web Designers, Web Developers, App Developers and Digital Marketers who know precisely what best suits you. Altogether, our experts plan SEO strategies keeping in mind about your exact industry and targeted clients, and deliver solutions that results in high ROI.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <label>
                    <input type="radio" name="collapse"></input>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Competitive Packages
                    </Accordion.Toggle>
                </label>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Amtex Info Solutions offers transparent and competitive pricing for results-oriented and profit-driven Digital Marketing services. Through our flexible engagement model and customer-focused approach, we intend at delivering utmost value to our customers for their investments and make sure that our clients get a high return on investment when they partner with us over other Digital marketing companies.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <label>
                    <input type="radio" name="collapse"></input>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Result Oriented Strategies
                    </Accordion.Toggle>
                </label>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Our team follows proven methodologies and our results-driven approach that enable us to bring utmost value to our clients' Digital marketing campaigns. It may be SEO, SMO, PPC, ORM or any other Digital marketing campaign, we take care of each project in a different way and optimize actions based on it's sole necessities. With elegant positioning, testing and innovation, we strive to take your Internet marketing campaigns to the next level.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <label>
                    <input type="radio" name="collapse"></input>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        Quick Turnaround Time
                    </Accordion.Toggle>
                </label>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>We are committed to deadlines and make sure we give prompt delivery to our clients. Our model works with the client to not only understand their requirement and time pressures but offer solutions and expertise while always being on time with the schedule. We understand the importance of deadlines and work to maintain prompt delivery of all deliverables.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default MarketingCollapse
