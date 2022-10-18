import {Container, Row, Col, Button, Accordion } from "react-bootstrap"

import img_bus from "../../assets/img/01.png"
import img_wisata from "../../assets/img/02.png"
import img_lokasi1 from "../../assets/img/03.png"
import img_lokasi2 from "../../assets/img/04.png"
import img_lokasi3 from "../../assets/img/05.png"
import img_lokasi4 from "../../assets/img/06.png"

export default function home() {
    return (
        <Container>
            <div>
                {/*Bagian Hero*/}
                <Row className='py-5 align-items-center'>
                    <Col className='py-5'>
                    <div className='text-center'>
                        <img src={img_bus} alt="site banner"/>
                    </div>
                    </Col>
                    <Col className='px-4'>
                        <h1 className='w-md-75'>Lebih Mudah Berpergian Bersama Kami!</h1>
                        <p className='w-md-75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Button variant="primary text-white px-4 py-2">Daftar Sekarang</Button>
                    </Col>
                </Row>
                {/*Bagian List Loket Terdekat*/}
                <Row className='py-5'>
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
                    <a href="#/" className='mt-3 text-center'>Lihat selengkapnya</a>
                </Row>
                {/*Bagian Tempat Yang Sering Dikunjungi*/}
                <Row className='py-5 align-items-center'>
                    <Col>
                        <h1 className='w-md-75'>Kunjungi Tempat Wisata Populer Saat Ini!</h1>
                        <p className='w-md-75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <img src={img_lokasi1} alt="site banner" className='w-50 h-auto'/>
                            </Col>
                            <Col className='mt-3 text-center'>
                                <img src={img_lokasi2} alt="site banner" className='w-50 h-auto'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <img src={img_lokasi3} alt="site banner" className='w-50 h-auto'/>
                            </Col>
                            <Col className='mt-3 text-center'>
                                <img src={img_lokasi4} alt="site banner" className='w-50 h-auto'/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='mt-3 text-center mx-auto'>
                        <img src={img_wisata} alt="site banner"/>
                    </Col>
                </Row>
                {/*Bagian 4 Keunggulan Menggunakan Kita*/}
                <Row className='py-5'>
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
                <Row className='py-5'>
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