import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};

    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  textarea:focus, input:focus{
    outline: none;
}

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;
