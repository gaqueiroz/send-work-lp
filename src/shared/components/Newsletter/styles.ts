import styled from "styled-components";

export const Container = styled.div`
  padding-top: 40px;

  @media (max-width: 750px) {
    .card {
      margin-left: 0% !important;
      margin-right: 0% !important;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 21px !important;
      border-radius: 25px !important;

      .content {
        background: none !important;
        padding-right: 0 !important;
        padding: 34px;
        margin-right: 34px;
      }
    }
  }

  .card {
    background: linear-gradient(95.93deg, #a63bfc 0%, #530095 100%);
    box-shadow: 0px 24px 194px 0px #8107e34d;
    margin-left: 20%;
    margin-right: 20%;
    border-radius: 50px;

    .content {
      background-image: url("/images/newsletter-detail.svg");
      background-size: 590px;
      background-position-x: 170px;
      background-position-y: 0px;
      background-repeat: no-repeat;
      padding: 20px 40px;
      padding-right: 350px;
    }

    h1 {
      font-weight: bold;
      font-size: 38px;
    }

    h2 {
      font-size: 18px;
      margin-top: 12px;
    }

    .email,
    .document {
      padding: 20px;
      border-radius: 50px;
      width: 100%;
      background-color: #ffffff3b;
      color: #fff;
      font-weight: bold;
      padding-left: 30px;
      padding-right: 30px;
      border: 1px solid #efdffb;
      margin-top: 12px;

      &::placeholder {
        color: #fff;
        font-size: 1.2em;
      }
    }

    .newsletter-checkbox {
      margin-top: 12px;
      strong {
        margin-left: 6px;
      }
    }

    .footer {
      display: flex;
      margin-top: 12px;

      button {
        background-color: #75e30a;
        color: #fff;
        padding: 14px 70px;
        border: 1px solid transparent;
        border-radius: 40px;
        color: #0d1d01;
        font-weight: bold;
        margin-right: 20px;
        transition: all 0.3s;

        &:hover {
          box-shadow: 0 0 5px #75e30a, 0 0 10px #75e30a, 0 0 30px #75e30a,
            0 0 80px #75e30a, 0 0 150px #75e30a;
          cursor: pointer;
        }

        span {
          font-size: 16px;
          font-weight: bold;
          color: #0d1d01;
        }
      }
    }
  }
`;
