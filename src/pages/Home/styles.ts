import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHome = styled.div<{ isOpen: boolean }>`
  filter: ${(props) => props.isOpen && 'blur(5px)'};
`;

export const StyledLink = styled(Link)`
  height: 100%;
  flex: 1;

  & > img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: black;
  }
`;

export const Container = styled.main`
  width: 100%;

  background-color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;

  padding: 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 40px;
`;

export const BookFilter = styled.ul`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 20px;

  padding: 10px;

  overflow-x: scroll;

  li {
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    text-transform: capitalize;

    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
    @media (max-width: 900px) {
      max-width: max-content;
      min-width: min-content;
      height: 50px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 900px) {
    max-width: 600px;
    width: 98%;
  }
`;

export const BookSection = styled.section`
  width: 100%;
  height: 350px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 20px;
  padding: 20px;

  border-radius: 15px;

  background-color: #eeeeee;

  & > div:first-child {
    height: 310px;
    width: 250px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow-y: hidden;

    & p {
      font-size: 16px;
      font-weight: 700;
      color: var(--color-primary);
      width: 100%;
      text-transform: uppercase;
    }

    & > img {
      height: 90%;
      width: 100%;

      object-fit: cover;

      border-radius: 15px;
    }
  }
`;

export const BooksList = styled.ul`
  width: 100%;
  height: 100%;

  overflow-x: scroll;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 20px;
  padding-bottom: 15px;
  gap: 20px;
`;

export const BookContent = styled.li`
  height: 100%;
  min-width: 200px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 10px;
  padding: 10px;

  border-radius: 15px;

  background-color: #fff;

  & > div:first-child {
    & > img {
      height: 180px;
      object-fit: contain;
      border-radius: 5px;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    gap: 10px;

    & > h3 {
      font-size: 16px;
      text-transform: uppercase;
    }

    & > button {
      background-color: var(--color-primary);
      color: #fff;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 10px;
      text-transform: capitalize;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: flex-start;

  gap: 10px;

  & > div:first-child {
    display: flex;

    align-items: flex-center;
    justify-content: flex-start;

    gap: 20px;

    & > div {
      display: flex;

      align-items: center;
      justify-content: flex-end;

      gap: 20px;
    }
    & > img {
      border: 2px solid red;
    }
    & button {
      padding: 10px 20px;

      font-size: 16px;
      font-weight: 600;

      border-radius: 16px;
    }

    & > div:first-child {
      & > button:first-child {
        background-color: transparent;
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
      }

      & > button:last-child {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        color: #eeeeee;
      }
    }

    & > div:last-child {
      display: flex;

      align-items: center;
      justify-content: space-between;

      width: 100%;

      & > button {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        color: #eeeeee;
      }
    }
  }

  & > div:last-child {
    width: 100%;
    height: 100%;

    & > input {
      width: 100%;
      height: 100%;

      padding: 5px 15px;

      border-radius: 16px;
      border: 1px solid #eee;

      outline: none;

      :focus {
        border: 1px solid var(--color-primary);
      }
    }
  }
`;
