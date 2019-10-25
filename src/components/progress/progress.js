import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Facebook, Twitter, Pinterest } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'
import './progress.css';
import box from './assets/black_box.png';
import {Card, ListGroup} from 'react-bootstrap';

function Progress(){
    console.log("start");
    const points = useSelector(state => state.points);
    const name = useSelector(state => state.name);
    const [level, setLevel] = useState(0);
    const url = 'this comes later lol'
    const shareText = 'I have become a level ' + level + " environmental hero with MyImpact!"
    useEffect(()=>{    
        if(points >= 25 && points < 50) setLevel(1);
        else if(points >= 50 && points < 75) setLevel(2);
        else if(points >= 75 && points < 100) setLevel(3);
        else if(points >= 100 && points < 250) setLevel(4);
        else if(points >= 250) setLevel(5);
    });

    return(
        <>
        <div className="Container">
        </div>
        <div className="Container">
            <div className="ContainTop"></div>
            <Card style={{ width: '50rem' }} className="align-middle">
                <Card.Img src={box} />
                <Card.Header>You have {points} points! And you are a level {level} hero!<Twitter style={{float: 'right'}}url={url} shareText={shareText} /><Pinterest style={{float: 'right'}}url={url} shareText={shareText} /></Card.Header>
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