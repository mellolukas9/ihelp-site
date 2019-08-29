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

  .button {
    background-color: #0d10c5;
    color: white;
  }

  .button:hover,
  .button:focus {
    background-color: #4f52f5;
  }
`;
