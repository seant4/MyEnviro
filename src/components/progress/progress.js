import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Facebook, Twitter, Pinterest } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'
import './progress.css';
import box from './assets/black_box.png';
import {Card, ListGroup, ProgressBar} from 'react-bootstrap';

function Progress(){
    console.log("start");
    const points = useSelector(state => state.points);
    const [total, setTotal] = useState(0);
    const name = useSelector(state => state.name);
    const [level, setLevel] = useState(0);
    const url = 'this comes later lol'
    const shareText = 'I have become a level ' + (level+1) + " environmental hero with MyImpact!"
    useEffect(()=>{    
        if(points >= 25 && points < 50){setLevel(1);setTotal((points/50)*100)}
        else if(points < 25){setTotal((points/25)*100)}
        else if(points >= 50 && points < 75){setLevel(2);setTotal((points/75)*100)}
        else if(points >= 75 && points < 100){setLevel(3);setTotal((points/100)*100)}
        else if(points >= 100 && points < 250){setLevel(4);setTotal((points/250)*100)}
        else{setLevel(5);}
        console.log(total);
    });

    return(
        <>
        <div className="Container">
        </div>
        <div className="Container">
            <div className="ContainTop"></div>
            <Card style={{ width: '50rem' }} className="align-middle">
                <Card.Img src={box} />
                <Card.Header>You have {points} points! And you are a level {level+1} hero!<Twitter style={{float: 'right'}}url={url} shareText={shareText} /><Pinterest style={{float: 'right'}}url={url} shareText={shareText} /></Card.Header>
                <Card.Header style={{height: '50px'}} ><ProgressBar style={{height: '25px'}} now={total} label={`${total}%`}    /></Card.Header>
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