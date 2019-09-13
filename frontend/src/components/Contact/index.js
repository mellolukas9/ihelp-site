import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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

          <button type="button" class="btn button-form btn-lg">
            Enviar Mensagem
          </button>
        </form>

        <footer className="mt-5 p-3 bg-dark text-center text-light">
          <h2>Fale conosco</h2>

          <p className="mb-3">
            Copyright © 2019 - iHelp Assessoria em TI - Todos os Direitos
            Reservados. Consultoria de Sistemas ERP TOTVS RM e PROTHEUS - Rio de
            Janeiro
          </p>

          <div className="conatiner">
            <button className="btn mr-2 link-footer">
              <FaFacebookF className="icons-footer" size={25} />
            </button>
            <button className="btn mr-2 link-footer">
              <FaWhatsapp className="icons-footer" size={25} />
            </button>
            <button className="btn link-footer">
              <FaLinkedinIn className="icons-footer" size={25} />
            </button>
          </div>
        </footer>
      </div>
    </Container>
  );
}
