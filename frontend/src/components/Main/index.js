import React from "react";
import Carousel from "../Carousel";
import Cards from "../Cards";

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

      {/* <footer className="mt-5 p-3 bg-dark text-center text-light">
        <h2>Fale conosco</h2>
        <p>
          Para ter um contato mais direto conosco envie uma mensagem{" "}
          <a href="#">pelo WhatsApp</a>
        </p>
      </footer> */}
    </Container>
  );
}
