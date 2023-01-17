import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  padding: 40px 80px;
  gap: 30px;

  & > h1 {
    font-size: 18px;
    color: #02c5b7;
  }

  & > p {
    font-size: 14px;
    color: #f18f18;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    text-align: justify;

    img {
      width: 150px;
    }
  }

  & > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      display: flex;
      flex-direction: column;
    }
  }
`;
