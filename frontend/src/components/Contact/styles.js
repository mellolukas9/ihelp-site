import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Ropa+Sans&display=swap");

  #container {
    background-color: none;
  }

  .inputs {
    padding: 20px 0 20px 10px;
    font-size: 16px;
    font-family: "Ropa sans", serif;
    color: white;
    -webkit-font-smoothing: antialiased !important;
  }

  .labels {
    font-size: 24px;
    font-family: "Ropa sans", serif;
    color: white;
    -webkit-font-smoothing: antialiased !important;
  }

  .button-form {
    background-color: #0d10c5;
    color: white;
  }

  .button-form:hover,
  .button-form:focus {
    background-color: #4f52f5;
  }

  footer h2 {
    font-size: 40px;
  }

  .link-footer {
    background-color: #fff;
    width: 57px;
    height: 57px;
    border-radius: 50%;
    border: 1px solid #000;
  }

  .link-footer:hover,
  .link-footer:focus {
    background-color: #343a40;
    transform: scale(1.1);
    color: #fff;
  }

  .icons-footer {
  }

  .icons-footer:hover,
  .icons-footer:focus {
  }
`;
