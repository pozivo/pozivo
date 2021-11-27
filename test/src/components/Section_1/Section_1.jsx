import React from 'react';
import { Button, Container, Container2, Col, Row, Card } from 'react-bootstrap';
import topolino from '../../assets/Topolino.png';
import epico from '../../assets/epico.png';
import raro from '../../assets/raro.png';
import comune from '../../assets/comune.png';
import './section_1.css';

const Section_1 = () => {
    return (
        <Container>
            <Row className="rarity__container">
                <Col md={6} lg={3} className="rarity">
                    <Card className="card__uno" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={topolino} alt="legendary" className="img__legendary" />
                        <Card.Body>
                            <Card.Title className="legendary__card-title"><h3>Legendary</h3></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="rarity">
                    <Card className="card__due" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={epico} alt="epic" className="img__epic" />
                        <Card.Body>
                            <Card.Title className="epic__card-title"><h3>Epic</h3></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="rarity">
                    <Card className="card__tre" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={raro} alt="rare" className="img__rare" />
                        <Card.Body>
                            <Card.Title className="rare__card-title"><h3>Rare</h3></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="rarity">
                    <Card className="card__quattro" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={comune} alt="common" className="img__common" />
                        <Card.Body>
                            <Card.Title className="common__card-title"><h3>Common</h3></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Section_1