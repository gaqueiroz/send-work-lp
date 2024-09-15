import styled from "styled-components";

export const Container = styled.div`
  background: rgb(15, 15, 15);
  background: linear-gradient(0deg, rgba(0, 0, 0) 0%, rgba(10, 10, 10, 1) 100%);
  margin-top: -6px;
  padding-bottom: 54px;
  /* height: 400px; */

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;

    .cards {
      flex-direction: column;
    }

    .actions-content {
      margin-left: 10%;
      margin-right: 10%;

      button {
        padding: 14px 2px !important;
        width: 100%;
        text-align: center;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }

  .cards {
    display: flex;
    gap: 50px;
    margin-left: 6%;
    margin-right: 6%;
    margin-top: -16px;

    @media (max-width: 750px) {
      margin-left: 16%;
      margin-right: 16%;

      .card {
        text-align: center;

        h2 {
          font-size: 18px !important;
          width: 75%;
          text-align: center;
          margin: auto;
          margin-bottom: 8px;
        }

        p {
          font-size: 14px !important;
        }

        img {
          margin-left: 0px !important;
        }
      }
    }

    .card {
      flex: 1;
      background-color: #252426;
      /* border: 1px solid #727272; */
      border-radius: 12px;
      padding: 30px;

      background: linear-gradient(#313131, #313131) padding-box,
        linear-gradient(80deg, #fff, #8107e3) border-box;
      border: 1px solid transparent;

      h2 {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      p {
        font-size: 22px;
      }

      img {
        margin-left: -28px;
        margin-bottom: -7px;
      }
    }
  }

  .actions-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding-bottom: 40px;

    button {
      cursor: inherit;
      background-color: #202020;
      color: #b3b3b3;
      padding: 14px 70px;
      border: 1px solid #696969;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-items: center;

      span {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .details {
    padding-bottom: 40px;
    margin-left: 6%;
    margin-right: 6%;
    text-align: center;

    @media (max-width: 750px) {
      h1,
      h2 {
        font-size: 30px !important;
      }

      p {
        width: 100% !important;
      }
    }

    h1 {
      color: #b058f6;
      font-weight: bold;
      font-size: 48px;
    }

    h2 {
      font-size: 48px;
      margin-bottom: 40px;
    }

    p {
      width: 816px;
      text-align: center;
      margin: auto;
    }
  }

  .divisor {
    margin: auto;
    text-align: center;
  }
`;
