import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/images/gradient.svg");
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  .first-title {
    font-size: 48px;
    background: -webkit-linear-gradient(#999999, #ffffff, #999999);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .second-title {
    font-size: 48px;
    font-weight: bold;
    color: #b058f6;
  }

  .infos-content {
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
      margin-top: 40px;
    }
  }

  h2 {
    font-size: 22px;
    margin-top: 30px;
    width: 822px;
    text-align: center;
  }

  button {
    background: linear-gradient(#8f20e8, #8f20e8) padding-box,
      linear-gradient(80deg, #d29bff, #8107e3) border-box;
    color: #fff;
    padding: 14px 70px;
    border: 1px solid transparent;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-items: center;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 5px #8f20e8, 0 0 10px #8f20e8, 0 0 30px #8f20e8,
        0 0 80px #8f20e8, 0 0 150px #8f20e8;
      cursor: pointer;
    }

    span {
      font-size: 16px;
      font-weight: bold;
    }

    .icon-content {
      background: #5cf978;
      border: 1px solid #b668f6;
      align-items: center;
      justify-content: center;
      display: flex;
      padding: 10px;
      border-radius: 100%;
      margin-left: 14px;
    }
  }

  .content {
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    background-image: url("/images/banner-background.svg");
    background-position: center center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    padding-top: 330px;
    background-position-x: 40%;
    background-position-y: 0;
    opacity: 0;
    animation: fadeIn 2s ease-in-out forwards;

    @media (max-width: 750px) {
      background-image: url(/images/banner-background-mobile.svg);
      background-size: 119%;
      background-repeat: no-repeat;
      padding-top: 65px !important;

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 14px;
        width: 324px;
      }
    }
  }

  .customer-link-content {
    display: none;
  }

  .actions-content {
    @media (max-width: 750px) {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        padding: 6px 14px;
      }

      .customer-link-content {
        margin-top: 10px;
        display: block;
      }
    }
  }
`;
