import React from "react";

export default function Contact({ address, phone, email }) {
  return (
    <div>
      <p>Address: {address} </p>
      <p>Email: {email} </p>
      <p>Phone number: {phone} </p>
    </div>
  );
}
