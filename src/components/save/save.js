import React, {useState} from 'react';
import box from './assets/black_box.png'
import './save.css';
import {CardColumns, ListGroup, Button, Card, Modal} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {walk, car, carpool, electriccar, strawn, straw, lights, ac, solar, trash, metal, compost, tree, garden, namemovement,walkn, carpooln, carn, lightsn, acn, solarn, trashn, metaln, compostn, treen, gardenn} from '../../actions';


function SaveInfoBox(props) {
    return(
        <Card className="SaveInfoCard">
            <Card.Body>
                <Card.Img variant="top" src={box}></Card.Img>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <ListGroup variant="flush">
                            <ListGroup.Item><Button variant="primary" onClick={() => {props.onClick[0](); props.onClick[1](); props.onClick[2]()}}>{props.title[0]}</Button></ListGroup.Item>
                            <ListGroup.Item><Button variant="primary" onClick={() => {props.onClick[3](); props.onClick[4](); props.onClick[5]()}}>{props.title[1]}</Button></ListGroup.Item>
                            <ListGroup.Item><Button variant="primary" onClick={() => {props.onClick[6](); props.onClick[7](); props.onClick[8]()}}>{props.title[2]}</Button></ListGroup.Item>
                    </ListGroup>
            </Card.Body>
        </Card>
    );
}



function Save(){

    const [show, setShow] = useState(false);
    const [content, setContent] = useState("Movement");
    const dispatch = useDispatch();
    const points = useSelector(state => state.points);
    const name = useSelector(state => state.name);
    const handleClose = () => setShow(false);
    const handleShow = (input) => {setShow(true); setContent(input);} 

    return(
        <div className="Container">
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nice Work!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're on your way to making Earth a better place! Thats {content} points!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
            <CardColumns className="CardColumnsStyle">
                <SaveInfoBox title={["I carpooled today!", "I walked today!", "I invested in an electric car!"]} name="Movement" onClick={[function(){handleShow(5)}, function(){dispatch(carpool())}, function(){dispatch(carpooln())}, function(){handleShow(10)}, function(){dispatch(walk())}, function(){dispatch(walkn())}, function(){handleShow(25)}, function(){dispatch(electriccar())}, function(){dispatch(carn())}]} description="Carpooling, walking, biking, or driving a fuel efficient car are all examples of eco-friendly transportation, and help reduce Carbon emissions!" />
                <SaveInfoBox title={["I picked up trash today!", "I used a metal straw today!", "I invested in an compost bin!"]}name="Waste" onClick={[function(){handleShow(5)}, function(){dispatch(trash())}, function(){dispatch(trashn())}, function(){handleShow(5)}, function(){dispatch(strawn())}, function(){dispatch(straw())}, function(){handleShow(25)}, function(){dispatch(compostn())}, function(){dispatch(compost())}]} description="Recycling, not using plastic straws, and using a compost bin are all eco-friendly ways of disposing of trash" />
                <SaveInfoBox title={["I turned off the lights today!", "I turned off the AC or heating today! ", "I invested in solar energy!"]}name="Power" onClick={[function(){handleShow(2)}, function(){dispatch(lights())}, function(){dispatch(lightsn())}, function(){handleShow(3)}, function(){dispatch(ac())}, function(){dispatch(acn())}, function(){handleShow(25)}, function(){dispatch(solar())}, function(){dispatch(solarn())}]} description="Turning off the lights, using less wall power, or even using a solar panel are all eco-friendly ways to reduce your power consumption"/>
                <SaveInfoBox title={["I planted a tree!", "I planted a garden!", "I invested in an electric car!"]}name="Nature" onClick={[function(){handleShow(25)}, function(){dispatch(tree())}, function(){dispatch(treen())}, function(){handleShow(25)}, function(){dispatch(garden())}, function(){dispatch(gardenn())}]} description="Plant a tree, start a garden, or pick up trash in your area, do whatever you can to help bring back the environment on earth" />
            </CardColumns>
        <div className="ContainBottom"></div>
        </div>
    );
}

export default Save;