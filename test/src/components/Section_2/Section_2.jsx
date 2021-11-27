import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import './section_2.css';

const Section_2 = () => {
    return (
        <Container>
            <Card className='Card'>
                <h4>Yooman Robots is an Italian project of 10.000
                    HAND DRAWN NFTs minted on the Polygon blockchain.</h4>
                <h4>Each Yooman Robot is unique and the price is 25 Matic.</h4>
                <h4>Yooman Robots are 100% decentralized and will live forever on the Ethereum blockchain.</h4>
                <h4></h4>
                <h4>The Robots will have the following rarity ranking:</h4>
                <h4>6500 will be Common</h4>
                <h4>2500 will be Rare</h4>
                <h4> 985 will be Epic</h4>
                <h4>15 will be Legendary</h4>
            </Card>
        </Container>
    )
}

export default Section_2