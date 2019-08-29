import React from "react";
import Form from "../Form";

import Icon from "../../assets/ihelp-Preto.png";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top nav-custom">
        <img className="navbar-brand" id="icon" src={Icon} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li>
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="#">
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                className="nav-item nav-link"
                href="#"
                data-toggle="modal"
                data-target="#modal-contact"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        class="modal fade"
        id="modal-contact"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <dialog class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Entre em contato
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <main class="modal-body">
              <Form />
            </main>

            <footer class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" class="btn btn-primary">
                Enviar
              </button>
            </footer>
          </dialog>
        </div>
      </div>
    </Container>
  );
}
