import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledUserPage = styled.div<{ isOpen: boolean }>`
  filter: ${(props) => props.isOpen && 'blur(5px)'};

  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
`;

export const StyledUserSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  & > img {
    background-color: red;
    width: 320px;
    height: 320px;
    position: absolute;
    top: 20%;
    border-radius: 100%;
    border: 5px solid white;
    object-fit: cover;
  }
`;

export const StyledUserBg = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  height: 223px;
  position: relative;
`;
export const StyledUserCard = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-white);
  margin-top: 202px;
  padding: 16px 24px;
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
  border-radius: 4px;
  gap: 20px;

  h2 {
    align-self: center;
    color: #4e2096;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const StyledCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 4px;
  p {
    font-size: 16px;
    font-weight: 600;
    color: #4e2096;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-black);
  }
`;

export const StyledCardUserBtns = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;

  & > button:first-child {
    width: 181px;
    height: 27px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 16px;
    color: #eeeeee;
    font-size: 14px;
    font-weight: 600;
  }

  & > button:last-child {
    width: 149px;
    height: 33px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: #ffffff;
    border-radius: 16px;
    font-weight: 600;
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 20px;

  font-size: 16px;
  font-weight: 600;

  border-radius: 16px;

  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: #eeeeee;
`;

export const StyledListSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey1);
  padding-bottom: 300px;
`;

export const StyledListSectionTitle = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #eeeeee;
  }
`;

export const StyledFavoritList = styled.ul`
  width: 100%;
  max-width: 1200px;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledBookCard = styled.li`
  width: 482px;
  height: 200px;
  display: flex;
  margin-top: 46px;
  background: var(--color-white);
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
  border-radius: 4px;
  flex-wrap: wrap;
  img {
    width: 150px;
    height: 200px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 24px;
    gap: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    color: #4e2096;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-black);
  }
`;
export const StyledHeaderNav = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;

  gap: 20px;
  & > button {
    padding: 10px 20px;

    font-size: 16px;
    font-weight: 600;

    border-radius: 16px;
    background-color: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }
`;
