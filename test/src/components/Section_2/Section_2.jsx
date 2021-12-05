import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import './section_2.css';
import jump from '../../assets/jumping-robot.gif';

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
            <div><h1 className='FAQ'>FAQ</h1></div>
            <Accordion className='Faq' defaultActiveKey="0">
                <Accordion.Item eventKey="0" className='Faq__item'>
                    <Accordion.Header className='Faq__title'>+ What's an NFT?</Accordion.Header>
                    <Accordion.Body>
                        An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='Faq__item'>
                    <Accordion.Header>+ How can I mint (buy) the Yooman Robots NFTs?</Accordion.Header>
                    <Accordion.Body>
                        In order to buy an NFT, you need to have a crypto-wallet such as Metamask where you could store your crypto currencies and NFTs tokens. Eachwallet comes with a unique address with which your NFTs and crypto-coins are associated.
                        Learn more about Metamask and get the install link here – https://metamask.io/
                        Once you have your wallet installed, Yooman Robots will be available for purchase on our website through the initial sale. At the time of purchase, a randomly selected Yooman Robot will be minted on the blockchain and delivered to your wallet and Opensea account. Once the initial sale is complete, you could still buy Yooman Robots on the secondary market on Opensea. Make sure you only buy from a verified collection!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='Faq__item'>
                    <Accordion.Header>+ Why you should buy Yooman robots?</Accordion.Header>
                    <Accordion.Body>
                        Yooman Robots are unique and hand drawn digital art
                        Yooman Robots are 100% decentralized and will live forever on the Ethereum blockchain.
                        What is the Price if I want to buy more Yooman Robots?<p></p>
                        <p>Our bulk prices are:</p>
                        <p></p>1st Pack = 1 Robots 25 Matic (1% chance to win epic robot)
                        <p></p>2nd Pack = 3 Robots 75 Matic (5% chance to win epic robot)
                        <p></p>3rd Pack = 5 Robots 125 Matic (8% chance to win epic robot)
                        <p></p>4th Pack = 10 Robots “pay only 9” 225 Matic (15% chance to win epic robot)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='Faq__item'>
                    <Accordion.Header>+ Why am I being asked to pay GAS?</Accordion.Header>
                    <Accordion.Body>
                        GAS is the price you pay in order to complete a transaction on the Polygon blockchain.
                        It is NOT something we set and none of it comes to us. GAS prices may vary frequently based on the network congestion at that point in time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='Faq__item'>
                    <Accordion.Header>+ Where will I see my Yooman Robots after minting?</Accordion.Header>
                    <Accordion.Body>
                        Your Yooman robots will appear in your Profile on Opensea (https://opensea.io/).
                        Make sure you connect to Opensea with the same wallet address that you use to mint your Yooman Robots with. If you don’t see the Yooman Robots in your Profile immediately, please check your Account Activity tab on Opensea to ensure your mint shows up there. In case you’re wondering, your Yooman Robots images will be stored on the IPFS!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='Faq__item'>
                    <Accordion.Header>+ What % commission is set on secondary sales?</Accordion.Header>
                    <Accordion.Body>
                        Secondary market commissions will be based on how many FREE primary sales we make!
                        Lower the number of Free sales, lower the commissions.<p></p>
                        We’ve designed it this way so that we win ONLY when you win!<p></p>
                        {'>'} 70% Primary sell for free – 3% secondary sales commissions (excludes Opensea commissions)<p></p>
                        30-70% Primary sell for free – 3% secondary sales commissions (excludes Opensea commissions)<p></p>
                        0-30% Primary sell for free – 3% secondary sales commissions (excludes Opensea commissions)<p></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className='Faq__item'>
                    <Accordion.Header>+ What can I do whit the Yooman Robots I mint?</Accordion.Header>
                    <Accordion.Body>
                        Ownership includes full creative & commercial rights. Use them as your profile pictures, print them on T-shirts, use them in your creatives, the possibilities are endless!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className='Faq__item'>
                    <Accordion.Header>+ What will I gain by holding a Yooman Robot?</Accordion.Header>
                    <Accordion.Body>
                        Each Yooman Robot is unique and some are much more rare than the others.
                        Yooman Robots holders could gain from the demand on secondary markets.
                        Each holders also qualify for exclusive access, free drops, discounts, or first preferences on future NFT/Merchandise drops!
                        I still have questions. Who do I ask?
                        Please feel free to reach out to us either on Twitter or on Discord. Rest assured, we will try to get back to you as soon as we humanly can!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div><h1 className='FAQ'>ROADMAP</h1><div className='img__container'><img src={jump} alt="robot" className='robot-jump' /></div></div>
            
            <Container className='Card2'>
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>1%</Card.Title>
                        <Card.Text className='TEXT'>
                            Presentation of the collection to the community and launch of the first GiveAway on our social media platforms.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>10%</Card.Title>
                        <Card.Text className='TEXT'>
                            Website online.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY SELECT'>
                    <Card.Body>
                        <Card.Title className='TITLE'>20%</Card.Title>
                        <Card.Text className='TEXT'>
                            Start of sale on our website.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>30%</Card.Title>
                        <Card.Text className='TEXT'>
                            1000 sold out, 3 buyers will be rewarded by drawing lots, each winner will win an Apple iPhone 13 S (each Yooman Robots will be a ticket).
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>40%</Card.Title>
                        <Card.Text className='TEXT'>
                            3000 NFTs sold out, 15.000 USDT will be donated to an environmental charity project to avoid the apocalypse that will happen in 2075 and that gave life to these YOOMAN ROBOTS.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>50%</Card.Title>
                        <Card.Text className='TEXT'>
                            5000 NFTs sold out, 5 buyers will be rewarded by drawing lots with Apple iMac 24. Additional airdrop of 5 legendary Yooman Robots.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>60%</Card.Title>
                        <Card.Text className='TEXT'>
                            7500 NFTs sold out, last airdrop of 5 legendary Yooman Robots.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>70%</Card.Title>
                        <Card.Text className='TEXT'>
                            Once the entire collection will be sold out, 5 buyers will be eligible to win 5 legendary Yooman Robots.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>80%</Card.Title>
                        <Card.Text className='TEXT'>
                            Yooman Robots will be used to farm new resources and playing cards in peer to peer battles.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>90%</Card.Title>
                        <Card.Text className='TEXT'>
                            Launch of the Yooman Robots market where nfts holders will be able to purchase through farmed tokens or other coins new accessories to embellish and / or make Robots different or stronger.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="info" style={{ width: '18rem' }} className='BODY'>
                    <Card.Body>
                        <Card.Title className='TITLE'>100%</Card.Title>
                        <Card.Text className='TEXT'>
                            LAST HUGE GIVEAWAY - Upon full mint you could Win up to Euro 65,000 in prizes (1 winner - Porsche 718 Boxter). New meeting involving community for future projects.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </Container>
        </Container>



    )
}

export default Section_2