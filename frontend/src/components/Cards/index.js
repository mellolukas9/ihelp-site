import React from "react";
import imgBlack from "../../assets/blackimg.png";

import { Container } from "./styles";

export default function Cards() {
  return (
    <Container>
      <div className="container-fluid bg-gelo pt-5 pb-5">
        <div className="row justify-content-center">
          <article className="card border-card p-0 m-4 col-12 col-md-4">
            {/* <img
              src={imgBlack}
              className="card-img-top card-position-img"
              alt="..."
            /> */}
            <div className="card-body">
              <h5 className="card-title">Implantação de Sistemas ERP</h5>
              <p className="card-text">
                A iHelp reúne profissionais especializados na implantação dos
                Sistemas ERP (TOTVS RM) e com conhecimentos sólidos em processos
                educacionais, fiscais, administrativos e de departamento
                pessoal.
              </p>
            </div>
          </article>

          <article className="card border-card p-0 m-4 col-12 col-md-4">
            {/* <img
              src={imgBlack}
              className="card-img-top card-position-img"
              alt="..."
            /> */}
            <div className="card-body">
              <h5 className="card-title">Customização de Processos</h5>
              <p className="card-text">
                Os nossos consultores geram questionários técnicos que
                possibilitam a descrição do ambiente em que o sistema deve
                operar, bem como as principais características contábeis,
                tributárias e fiscais de cada empresa.
              </p>
            </div>
          </article>

          <article className="card border-card p-0 m-4 col-12 col-md-4">
            {/* <img
              src={imgBlack}
              className="card-img-top card-position-img"
              alt="..."
            /> */}
            <div className="card-body">
              <h5 className="card-title">Administração de Banco de Dados</h5>
              <p className="card-text">
                Conte conosco para administrar a sua base de dados SQL Server ou
                Oracle. A iHelp pode implantar e gerenciar rotinas de Backup e
                Tunning, criação de Stored Procedures, Triggers e Views.
              </p>
            </div>
          </article>

          <article className="card border-card p-0 m-4 col-12 col-md-4">
            {/* <img
                src={imgBlack}
                className="card-img-top card-position-img"
                alt="..."
              /> */}
            <div className="card-body">
              <h5 className="card-title">Desenvolvimento de Sistema</h5>
              <p className="card-text">
                A iHelp disponibiliza uma equipe altamente capacitada nas
                diversas tecnologias de desenvolvimento de sistemas e banco de
                dados e oferece o desenvolvimento de sistemas e processos
                integrados de forma exclusiva para o funcionamento da sua
                empresa.
              </p>
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
