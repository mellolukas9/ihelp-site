import React from "react";

import { Container } from "./styles";

export default function Form() {
  return (
    <Container>
      <form>
        <div className="form-group">
          <label for="validationCustom01">Nome completo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nome@exemplo.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Mensagem</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </form>
    </Container>
  );
}
