import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 1;
  background-color: rgba(89, 89, 89, 0.3);
`;

export const Wrapper = styled.div`
  width: 600px;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  background-color: #fff;

  border-radius: 15px;
  & > header {
    text-align: right;

    width: 100%;

    background-color: #02c5b7;

    padding: 12px;

    border-radius: 15px 15px 0px 0px;
  }

  & > header>button{
    width: 25px;
    height: 25px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    font-weight: 700;
  }

  & > footer {
    min-height: 30px;
    width: 100%;

    background-color: #02c5b7;

    border-radius: 0px 0px 15px 15px;
  }

  @media (max-width:900px){
    max-width: 600px;
    width: 95%;
    max-height: 95%;
  }

`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
`;
