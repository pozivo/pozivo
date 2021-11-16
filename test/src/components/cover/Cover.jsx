import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import cover from '../../assets/robot.gif';
import './cover.css';

const Cover = () => {
    return (
        <Container>
            <Row>
                <Col sm={5}>
                    <img src={cover} alt="robot" className="cover__container" />
                </Col>
                <Col className="story__container" sm={7}>
                    <Row className="cover__story">
                    <h6>Story</h6>
                    <h2>YOOMAN ROBOTS</h2>
                    <p>Yooman robots come from the Ethereum blockchain world, they are robots that were formed after the apocalypse wiped out the entire human race on earth in the year 2075.
                        Each robot is original and was made up of spare parts found here and there in the most remote places on our planet.</p>
                    <Button className="bottn" variant="primary">Gallery</Button>
                    <Button className="bottn" variant="primary">Mint</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Cover