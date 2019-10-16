import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import './save.css';
import {CardColumns, Button, Card} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {movement, waste, power, nature, namemovement, namewaste, namepower, namenature} from '../../actions';
import Popup from "reactjs-popup";

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
    const dispatch = useDispatch();
    const points = useSelector(state => state.points);
    const name = useSelector(state => state.name);

    return(
        <div className="Container">
            <CardColumns className="CardColumnsStyle">
                <SaveInfoBox name="Movement" onClick={() => {dispatch(movement());dispatch(namemovement());}} description="Carpooling, walking, or driving a fuel efficient car are all examples of eco-friendly transportation" />
                <SaveInfoBox name="Waste" onClick={() => {dispatch(waste());dispatch(namewaste())}} description="Recycling, picking up trash, and using a compost bin are all eco-friendly ways of disposing of trash" />
                <SaveInfoBox name="Power" onClick={() => {dispatch(power());dispatch(namepower())}} description="Turning off the lights, using less wall power, or even using a solar panel are all eco-friendly ways to reduce your power consumption"/>
                <SaveInfoBox name="Nature" onClick={() => {dispatch(nature());dispatch(namenature())}} description="Plant a tree, start a garden, do whatever you can to help bring back the environment on earth" />
            </CardColumns>
        <div className="ContainBottom"></div>
        </div>
    );
}

export default Save;