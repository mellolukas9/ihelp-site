import React from "react";
// import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img4 from "../../assets/img4.jpg";

import { Container } from "./styles.js";

export default function Carousel() {
  return (
    <Container>
      <section className="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-interval="3000"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img4}
                className="d-block w-100 img-carousel"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block h-50">
                <h1 className="titles-slide display-4">As Melhores Soluções</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100 img-carousel"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block h-50">
                <h1 className="titles-slide display-4">Second slide label</h1>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    </Container>
  );
}
