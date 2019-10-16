import React, {useState} from 'react';
import './save.css';
import {CardColumns, Button, Card, Modal} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {movement, waste, power, nature, namemovement, namewaste, namepower, namenature} from '../../actions';


function SaveInfoBox(props) {


    return(
        <Card className="SaveInfoCard">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary" onClick={props.onClick}>Go somewhere</Button>
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
                <SaveInfoBox name="Movement" onClick={() => {handleShow(10); dispatch(movement());dispatch(namemovement());}} description="Carpooling, walking, biking, or driving a fuel efficient car are all examples of eco-friendly transportation, and help reduce Carbon emissions!" />
                <SaveInfoBox name="Waste" onClick={() => {handleShow(5); dispatch(waste());dispatch(namewaste())}} description="Recycling, not using plastic straws, and using a compost bin are all eco-friendly ways of disposing of trash" />
                <SaveInfoBox name="Power" onClick={() => {handleShow(2); dispatch(power());dispatch(namepower())}} description="Turning off the lights, using less wall power, or even using a solar panel are all eco-friendly ways to reduce your power consumption"/>
                <SaveInfoBox name="Nature" onClick={() => {handleShow(15); dispatch(nature());dispatch(namenature())}} description="Plant a tree, start a garden, or pick up trash in your area, do whatever you can to help bring back the environment on earth" />
            </CardColumns>
        <div className="ContainBottom"></div>
        </div>
    );
}

export default Save;