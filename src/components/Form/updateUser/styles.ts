import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 40px 120px;
  gap: 30px;

  & > h1 {
    color: #02c5b7;
  }

  & > input {
    width: 100%;

    padding: 10px 15px;

    outline: none;

    border-radius: 15px;
    border: 1px solid #b48cf2;

    &::placeholder {
      color: #b48cf2;
    }
  }

  & > button {
    width: 100%;
    background-color: #02c5b7;

    padding: 10px 15px;
    border-radius: 15px;
    color: #fff;
  }
`;

export const Switch = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .first {
    position: absolute;

    top: 8px;
    left: -120px;

    white-space: nowrap;
    color: #b48cf2;

    transition: all 0.5s;
    scale: 1.2;
  }

  .last {
    position: absolute;

    top: 8px;
    left: 80px;

    white-space: nowrap;

    transition: all 0.5s;
    scale: 1;
  }

  .switch input:checked ~ .last {
    color: #b48cf2;
    scale: 1.2;
  }

  .switch input:checked ~ .first {
    color: black;
    scale: 1;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #02c5b7;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
