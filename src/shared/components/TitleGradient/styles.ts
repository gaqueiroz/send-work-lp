import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding-top: 20px;

  h1 {
    font-size: 124px;
    /* background: linear-gradient(359deg, #1d1b1f 3%, #342a3c 21%, #342a3c 100%); */
    background: linear-gradient(359deg, #1d1b1f 3%, #342a3c 21%, #342a3c 100%);
    opacity: 0.1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: bold;
    letter-spacing: 8px;
  }

  @media (max-width: 750px) {
    padding-top: 0px;
    
    img {
      width: 96%;
    }
  }
`;
