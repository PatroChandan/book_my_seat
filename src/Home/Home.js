import React from "react";
import Nav from "../container/nav/Nav";
import Seat from "../container/seats/Seat";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <ToastContainer />
      <Nav />
      {/* <Seat /> */}
    </div>
  );
};

export default Home;
