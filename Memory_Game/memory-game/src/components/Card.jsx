import React from 'react';
import "./Card.css";





function Card(props ){



	return (
		<div className="card" >
        <div className={props.flipped ? "flipped" : ""}>
          <img className="front" src={props.src} alt = "card-Front"/>
          <img className="back" 
          src ="/images/blank.png" 
          onClick = {()=>{
          	props.onChecked(props.id);
          }}

          alt = "card-Back"/>
        </div>
        </div>
		);
}

export {Card};