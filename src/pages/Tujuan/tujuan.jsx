import {Container, Row, Col} from "react-bootstrap"
import ListLoket from "./list-loket"

export default function tujuan() {
    return (
        <>
            <div fluid className='no-padding'>
                <img className='w-100' src='https://via.placeholder.com/125x15' alt="site banner"/>
            </div>
            <Container className='p-container'>
                {/*Bagian Hero*/}
                <Row>
                    <Col md={9} className='mt-4'>
                        <h3>Heading</h3>
                        <img className='w-100 h-10 mt-2' src='https://via.placeholder.com/125x10' alt="site banner"/>
                        <Row className='text-center'>
                            <Col sm={12} md={4} className='mt-3'>
                                <ListLoket/>
                            </Col>
                            <Col sm={12} md={4} className='mt-3'>
                                <ListLoket/>
                            </Col>
                            <Col sm={12} md={4} className='mt-3'>
                                <ListLoket/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className='mt-4'>
                        Sidebar
                    </Col>
                </Row>
            </Container>
        </>
        
    )
}