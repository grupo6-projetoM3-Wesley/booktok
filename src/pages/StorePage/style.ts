import styled from "styled-components";

export const StyledStorePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;

  .container {
    max-width: 1200px;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #ffffff;
  }

  .header-div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .header-div > div {
    display: flex;
    gap: 89px;
  }

  .header-div > img {
    width: 396px;
    height: 98px;
  }

  .store-info {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .avatar-bg {
    background-color: var(--color-primary);
    width: 100%;
    height: 223px;
  }

  section > img {
    width: 320px;
    height: 320px;
    border-radius: 160px;
    position: absolute;
    top: 160px;
    border: 3px solid white;
  }

  .store-data {
    width: 480px;
    height: 254px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 202px;
    padding: 16px 24px;
    box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
    border-radius: 4px;
    gap: 20px;

    h2 {
      align-self: center;
    }

    div {
      display: flex;
      justify-content: space-around;
    }
  }

  .list-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
    margin-top: 150px;

    input {
      width: 265px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #b48cf2;
      border-radius: 16px;
      padding: 9px 22px;
    }
  }

  ul {
    display: flex;
    gap: 61px;
    background-color: #eeeeee;
    margin-bottom: 46px;
  }

  .filter-div {
    display: flex;
    max-width: 1200px;
    width: 100%;
    justify-content: flex-end;
    gap: 32px;
  }

  .new-book {
    display: flex;
    max-width: 1200px;
    width: 100%;
  }
`;

export const StyledCard = styled.li`
  display: flex;
  margin-top: 46px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
  border-radius: 4px;

  img {
    width: 150px;
    height: 200px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    gap: 8px;
  }
`;
