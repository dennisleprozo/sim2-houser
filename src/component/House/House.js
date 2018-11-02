import React from "react";
import './house.css'

export default function House(props) {
  return (
    <div className="house">
      <h3></h3>
      <button onClick={() => props.deleteHouse(props.id)}>x</button>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <p>{props.image}</p>
      <p>{props.mortgage}</p>
      <p>{props.rent}</p>
<hr/>
    </div>
  );
}
