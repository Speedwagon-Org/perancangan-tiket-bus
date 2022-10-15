import {Container, Row, Col, Button, Accordion } from "react-bootstrap"

export default function home() {
    return (
        <Container className='p-container'>
            <div>
                {/*Bagian Hero*/}
                <Row className='p-row'>
                    <Col>
                    <div className='text-center'>
                        <img src="https://via.placeholder.com/500x350" alt="site banner"/>
                        </div>
                    </Col>
                    <Col className='mt-5'>
                        <h2>Lebih Mudah Berpergian Bersama Kami!</h2>
                        <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Button variant="info">Call To Action</Button>
                    </Col>
                </Row>
                {/*Bagian List Loket Terdekat*/}
                <Row className='p-row'>
                    <h2 className='text-center'>Heading - Loket terdekat dengan lokasi</h2>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Row>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                    </Row>
                    <a className='mt-3 text-center'>Lihat selengkapnya</a>
                </Row>
                {/*Bagian Tempat Yang Sering Dikunjungi*/}
                <Row className='p-row'>
                    <Col>
                        <h3>Heading - Menampilkan 4 tempat yang sering dikunjungi</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <img src="https://via.placeholder.com/200x200" alt="site banner"/>
                            </Col>
                            <Col className='mt-3 text-center'>
                                <img src="https://via.placeholder.com/200x200" alt="site banner"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <img src="https://via.placeholder.com/200x200" alt="site banner"/>
                            </Col>
                            <Col className='mt-3 text-center'>
                                <img src="https://via.placeholder.com/200x200" alt="site banner"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='mt-3 text-center mx-auto'>
                        <img src="https://via.placeholder.com/300x250" alt="site banner"/>
                    </Col>
                </Row>
                {/*Bagian 4 Keunggulan Menggunakan Kita*/}
                <Row className='p-row'>
                    <h2 className='text-center'>Heading - Memberitau 4 keuntungan utama menggunakan kita</h2>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Row>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                        <Col className='mt-3 text-center'>
                            <img src="https://via.placeholder.com/125x125" alt="site banner"/>
                        </Col>
                    </Row>
                </Row>
                {/*Bagian FAQ*/}
                <Row className='p-row'>
                    <h2 className='text-center'>Heading - FAQ</h2>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='mt-3 faq'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Row>
            </div>
        </Container>

    )
}