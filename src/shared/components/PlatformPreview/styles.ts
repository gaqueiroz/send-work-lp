"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: -45px;
  padding-bottom: 34px;
  /* padding-bottom: 45px; */
  background-color: #1a1a1a;

  .preview {
    margin-top: -105px;

    @media (max-width: 750px) {
      img {
        color: transparent;
        width: 385px;
        height: 327px;
      }
    }

    img {
      text-align: center;
      margin: auto;
      display: flex;
    }
  }

  .picture-preview {
    img {
      width: 100%;
    }
  }

  .actions-content {
    button {
      background-color: #202020;
      border: 1px solid #696969;

      @media (max-width: 750px) {
        background-color: #202020;
        border: 1px solid #696969;
        width: 151px;
        padding: 12px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .step-gradient {
    img {
      width: 80%;
    }
  }

  .steps {
    display: flex;
    margin-left: 6%;
    margin-right: 6%;
    gap: 30px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
      flex-direction: column;
      gap: 14px;
      margin-bottom: 14px;

      .step {
        width: 100% !important;
        height: 291px !important;
        padding-bottom: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        

        .icon-content img {
          margin-top: -10px;
        }
      }
    }

    .step {
      background-color: #ffffff;
      color: #1d1c1e;
      border-radius: 11px;
      width: 33.33%;
      height: 300px;
      padding: 20px;
      

      img {
        margin-left: -14px;
        width: 80px;
        height: 80px;
      }

      h2 {
        color: #8107e3;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 12px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
