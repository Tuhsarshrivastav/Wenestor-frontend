import React, { Component } from "react";
import Heading from "../common/Heading";
import NoBorderCard from "../card/NoBorderCard";
import Profit from "../../Images/profit.png";
import Capital from "../../Images/capital.png";
import Research from "../../Images/research.png";
import Sell from "../../Images/sell.png";
import Strategy from "../../Images/strategy.png";
import Data from "../../Images/data.png";
import Start from "../../Images/start.png";
import Transform from "../../Images/transform.png";

export default class WorkOn extends Component {
  render() {
    return (
      <section className="section mt-5 mb-5">
        <Heading heading="Cohors we work on" color="black-text" />
        <div className="container pt-5">
          <div className="row  text-center px-auto">
            <NoBorderCard text="Growing Market Share">
              <img src={Profit} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Managing Business">
              <img src={Data} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Raising Capital">
              <img src={Capital} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Selling Business">
              <img src={Sell} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Market Research">
              <img src={Research} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Business Strategy">
              <img src={Strategy} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Start a Business">
              <img src={Start} width="30%" />
            </NoBorderCard>
            <NoBorderCard text="Transform Business">
              <img src={Transform} width="30%" />
            </NoBorderCard>
          </div>
        </div>
      </section>
    );
  }
}
