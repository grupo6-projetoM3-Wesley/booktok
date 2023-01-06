import styled from "styled-components";

export const StyledHomeOff = styled.div`
  header {
    border-bottom: 1px solid #eeeeee;
  }
  .headerContent {
    max-width: 1195px;
    margin: 0 auto;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imgLogo {
    width: 396px;
    height: 98px;
  }
  .loginContent {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }
  .btnContent {
    display: flex;
    gap: 10px;
  }
  .btnRegister {
    height: 30px;
    padding: 0 24px;
    border: 1px solid #02c5b7;
    border-radius: 16px;
    font-size: 16px;
    color: #02c5b7;
  }
  .btnLogin {
    height: 30px;
    padding: 0 24px;
    font-size: 16px;
    border-radius: 16px;
    background-color: #02c5b7;
    color: white;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  label {
    font-size: 14px;
  }
  input {
    height: 35px;
    width: 228px;
    padding: 16px;
    border: 1px solid #02c5b7;
    border-radius: 16px;
  }
`;
