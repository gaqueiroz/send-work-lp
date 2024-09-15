import styled from "styled-components";

export const Container = styled.div`
  background-color: #1d1d1d;
  padding-bottom: 30px;

  @media (max-width: 750px) {
    h1 {
      width: 90%;
      text-align: left !important;
      margin-left: 6%;
      margin-right: 6%;
    }

    .testimonial-gradient {
      img {
        width: 90%;
        height: auto;
      }
    }
  }

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 38px;
    text-align: center;
    margin-top: 30px;
    padding-bottom: 30px;
  }

  .testimonials {
    display: flex;
    margin-left: 6%;
    margin-right: 6%;
    gap: 20px;
    transition: all 800s;

    @media (max-width: 750px) {
      flex-direction: column;

      .testimonial-off {
        display: none !important;
      }
    }

    .testimonial {
      background-color: #252525;
      padding: 40px;
      border-radius: 12px;
      border: 1px solid #737373;

      &:hover {
        background: linear-gradient(#313131, #313131) padding-box,
          linear-gradient(80deg, #fff, #8107e3) border-box;
        border: 1px solid transparent;
        box-shadow: 0px 0px 28px -3px #8107e3;
      }

      p {
        font-size: 16px;
      }

      .customer-info {
        display: flex;
        margin-top: 10px;

        .customer-name {
          color: #5dfa78;
        }
      }
    }
  }
`;
