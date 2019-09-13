import React from "react";
import Carousel from "../Carousel";
import Cards from "../Cards";

import ViverdeLogo from "../../assets/viverde-logo.png";
import M2mLogo from "../../assets/m2m-logo.png";
import ThoquinoLogo from "../../assets/thoquino-logo.png";

import { Container } from "./styles";

export default function Main() {
  return (
    <Container>
      <Carousel />

      <section className="title">
        <h1 className="text-center pt-5" id="text-font">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-center text-secondary pb-5 mb-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          quaerat eveniet repudiandae, possimus id blanditiis est laborum nam,
          modi quod quae.
        </p>
      </section>

      <Cards />
      <section className="m-5">
        <div className="container">
          <ul className="row">
            <figure className="p-0 col-12 col-sm-4">
              <img id="viverde-logo" src={ViverdeLogo} alt="" />
            </figure>

            <figure className="p-0 col-12 col-sm-4">
              <img id="m2m-logo" src={M2mLogo} alt="" />
            </figure>

            <figure className="p-0 col-12 col-sm-4">
              <img id="thoquino-logo" src={ThoquinoLogo} alt="" />
            </figure>
          </ul>
        </div>
      </section>
    </Container>
  );
}
