import styled from "styled-components";

export const StyledHome = styled.div<{ isOpen: boolean }>`
  filter: ${props => props.isOpen && "blur(5px)"};

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
    align-items: center;
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
  .btnLogin, .btnLogout {
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

export const Picture = styled.picture`
  height: 100%;
  flex: 1;

  & > img {
    width: 60px;
    border-radius: 100%;
    background-color: black;
  }
`

export const Container = styled.main`
  width: 100%;


  background-color: #fff;
`

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
`

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

    &:hover{
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(1px);
    }
  }
`

export const BookSection = styled.section`
  width: 100%;
  height: 350px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 20px;
  padding: 20px;

  border-radius: 15px;

  background-color: #EEEEEE;

  & > div:first-child{
    padding-top: 5px;
    height: 310px;
    width: 200px;

    & > img{
      height: 100%;
      width: 100%;

      object-fit: cover;

      border-radius: 15px;
    }
}
`

export const BooksList = styled.div`
  width: 100%;
  height:100%;

  overflow-x: scroll;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 20px;
  padding-bottom: 15px;
  gap: 20px;
`

export const BookContent = styled.div`
  height: 100%;
  min-width: 200px;

  display: flex;
  flex-direction: column;

  align-items:center;
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

    align-items:center;
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
`

