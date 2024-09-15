import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 6%;
  margin-right: 6%;

  .logo-content {
    @media (max-width: 750px) {
      text-align: center;
      margin: auto;

      img {
        width: 200px;
      }
    }
  }

  .nav-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 12px;

    @media (max-width: 750px) {
      display: none;
    }

    .nav-item {
      gap: 5px;
      font-size: 16px;

      a {
        color: #757575;
        cursor: pointer;
      }
    }
  }

  .actions-content {
    display: flex;
    flex-direction: row;
    @media (max-width: 750px) {
      display: none;

      .customer-link-content {
        display: none;
      }
    }

    button {
      background: linear-gradient(#313131, #313131) padding-box,
        linear-gradient(80deg, #fff, #8107e3) border-box;
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
        background: #8d1ce8;
        border: 1px solid #b668f6;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 10px;
        border-radius: 100%;
        margin-left: 14px;
      }
    }
  }
`;
