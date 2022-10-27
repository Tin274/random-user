import React from "react";
import Contact from "./Contact";

export default function User(props) {
  return (
    <div>
      <img src={props.picture} alt="name" />
      <p>Name : {props.name} </p>
      <p>Age : {props.age} </p>
      <Contact
        address={props.address}
        email={props.email}
        phone={props.phone}
      />
    </div>
  );
}
