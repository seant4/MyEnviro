import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';
import {useSelector} from 'react-redux';
let movement = 0;
let waste = 0;
let power = 0;
let nature = 0;

function CreateData(){

}

function ProgressChart(){
  const name = useSelector(state => state.name);
    for(let i = 0; i < name.length; i++){
      switch(i){
        case("Movement"):
          movement++;
          break;
        case("Waste"):
          waste++;
          break;
        case("Power"):
          power++;
          break;
        case("Nature"):
          nature++;
      }
    }
    let data = 
      [ {angle: 1, radius: movement}, {angle: 2, radius: waste}, {angle: 3, radius: power}, {angle: 4, radius: nature} ];
    return (
      <div className="ProgressChart">
        <RadialChart height={300} width={300} data={data} />

      </div>
    );
}

export default ProgressChart;
