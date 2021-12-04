import React from "react";
import LateralBoard from "../components/LateralBoard";

const Home = (props) => {
  return (
    <div className="home">
      <LateralBoard items={props.items} />
      HOME
    </div>
  );
};

export default Home;
