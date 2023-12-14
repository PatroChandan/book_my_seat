import React, { useState } from "react";
import "./nav.css";
import Seat from "../seats/Seat";

const Nav = () => {
  const [quanityOfTicket, setQuantityOfTicket] = useState("");
  const [ticketType, setTicketType] = useState("");

  const ticketTypeHandler = (event) => {
    setTicketType(event.target.value);
  };

  const quantityHandler = (event) => {
    setQuantityOfTicket(event.target.value);
  };
  return (
    <div>
      <div className="navbar">
        <div className="box">
          <label htmlFor="tickettype">Ticket Type:</label>
          <select
            id="tickettype"
            value={ticketType}
            onChange={ticketTypeHandler}
          >
            <option value="Select Type">Select Type</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div className="box">
          <label htmlFor="qty">Ticket Quantity:</label>
          <select id="qty" value={quanityOfTicket} onChange={quantityHandler}>
            <option value="">Qnty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <Seat type={ticketType} quanityOfTicket={quanityOfTicket} />
    </div>
  );
};

export default Nav;
