import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ListLoket() {
    return (
        <Card className='text-left'>
            <Card.Img variant="top" src="https://via.placeholder.com/100x75"/>
            <Card.Body>
                <Card.Title>Nama Loket</Card.Title>
                <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Nama BUS - Tujuan</ListGroup.Item>
                <ListGroup.Item>Nama BUS - Tujuan</ListGroup.Item>
                <ListGroup.Item>Nama BUS - Tujuan</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Lihat</Card.Link>
            </Card.Body>
        </Card>
    );
}