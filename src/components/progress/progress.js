import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './progress.css';
import {Card, Container, Col, Row,CardColumns, Header, ListGroup, Item} from 'react-bootstrap';

function Progress(){
    console.log("start");
    const points = useSelector(state => state.points);
    const name = useSelector(state => state.name);

    return(
        <>
        <div className="Container">
        </div>
        <div className="Container">
            
            <div className="ContainTop"></div>
            <Card style={{ width: '50rem' }} className="align-middle">
                <Card.Header>You have {points} points!</Card.Header>
                    <ListGroup variant="flush">
                        {([...name].reverse()).map((n)=>
                            <ListGroup.Item>{n}</ListGroup.Item>
                        )}
                    </ListGroup>
            </Card>
            <div className="ContainBottom"></div>
         </div>
        </>
    )
}

export default Progress;