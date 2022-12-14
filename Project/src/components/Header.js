import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <Link to="/"><h1>SnapShot</h1></Link>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
