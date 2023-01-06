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
    position: fixed;
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
  }
`;
