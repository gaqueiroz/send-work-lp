import styled from "styled-components";

export const Container = styled.div`
  background-color: #1a1a1a;
  padding-bottom: 40px;
  
  @media (max-width: 750px) {
    .footer-items {
      flex-direction: column;
      gap: 30px;
    }

    .copy-content {
      flex-direction: column;

      .copy {
        margin-bottom: 30px;
      }
    }
  }

  .footer-items {
    display: flex;
    margin-left: 6%;
    margin-right: 6%;
    padding-top: 30px;
    padding-bottom: 40px;
    
    .footer-link {
      margin-top: 12px;
      a {
        color: #a9a9a9;
      }
    }
  }

  .copy-content {
    display: flex;
    margin-left: 6%;
    margin-right: 6%;
    border-top: 1px solid #333333;
    padding-top: 40px;

    .copy { 
      flex: 1;
    }
  }
`;
