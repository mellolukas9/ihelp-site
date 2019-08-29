import React from "react";

import { Container } from "./styles";

export default function Contact() {
  return (
    <Container className="bg-dark">
      <div className="container" id="container">
        <form className="p-5">
          <div className="form-group">
            <label className="labels" for="validationCustom01">
              Nome completo
            </label>
            <input
              type="text"
              className="form-control inputs"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label className="labels" for="exampleFormControlInput1 labels">
              Email
            </label>
            <input
              type="email"
              className="form-control inputs"
              id="exampleFormControlInput1"
              placeholder="nome@exemplo.com"
            />
          </div>

          <div className="form-group">
            <label className="labels" for="exampleFormControlTextarea1 labels">
              Mensagem
            </label>
            <textarea
              className="form-control inputs"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <button type="button" class="btn button btn-lg">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </Container>
  );
}
