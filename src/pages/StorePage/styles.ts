import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`

    display: flex;

    align-items: center;
    justify-content: flex-end;

    gap: 20px;


  & button {
    padding: 10px 20px;
    
    font-size: 16px;
    font-weight: 600;
    
    border-radius: 16px;
  }

  & > div:first-child{
      & > button:first-child {
      background-color: transparent;
      border: 1px solid var(--color-primary);
      color: var(--color-primary); 
    }

    & > button:last-child{
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      color: #EEEEEE;
    }
    
  }`

export const StyledStorePage = styled.div<{ isOpen: boolean }>`
  filter: ${props => props.isOpen && "blur(5px)"};

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
    border: 3px solid white;
    z-index: 1;

    @media (max-width:900px) {
      max-width: 120px;
      max-height: 120px;
    }    

  }

  .list-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
    margin-top: 150px;
    max-width: 1200px;
    width: 100%;
    padding: 100px 0;
    margin: 0 auto;
    
    @media (max-width:900px){
      width:98%;
      margin-top: 15px;
      padding: 10px;
    }

    input {
      width: 512px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #b48cf2;
      border-radius: 16px;
      padding: 9px 22px;

      @media (max-width:900px){
        max-width: 512px;
        width: 100%;
      }
    }
  }

  ul {
    display: flex;
    gap: 61px;
    background-color: #eeeeee;
    margin-bottom: 46px;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    align-items: flex-start;
    justify-content: center;

      @media (max-width:900px) {
        gap:0px;
      }
  }

  .filter-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 20px;
    height: 100%;
    width: 100%;

    @media (max-width:900px){
      justify-content: center;
      height: 43px;
    }

    

  & > input {
    width: 100%;
    max-width: 400px;

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

  .new-book {
    display: flex;
    max-width: 1200px;

    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width:900px){
      flex-direction: column-reverse;
      gap: 10px;
    }

    & > button {
      padding: 10px 20px;
    
      font-size: 16px;
      font-weight: 600;
      
      border-radius: 16px;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      color: #EEEEEE;

      white-space: nowrap;
    }
  }
`;

export const StyledCard = styled.li`
  display: flex;
  margin-top: 46px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
  border-radius: 4px;
  min-width: 150px;
  max-width: 510px;
  width: 100%;

  @media (max-width:900px) {
    max-width:510px;
    min-width: 280px;
    width: 98%;
    
  }
  

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

  & button {
    padding: 10px 20px;
    
    font-size: 16px;
    font-weight: 600;
    
    border-radius: 16px;

      background-color: transparent;
      border: 1px solid var(--color-primary);
      color: var(--color-primary); 
  }
`;

export const StyledHeaderNav = styled.div`
    display: flex;

    align-items: center;
    justify-content: flex-end;

    gap: 20px;
&> button{
  padding: 10px 20px;
    
    font-size: 16px;
    font-weight: 600;
    
    border-radius: 16px;
      background-color: transparent;
      border: 1px solid var(--color-primary);
      color: var(--color-primary); 
    }
`


export const StyledLink = styled(Link)`
padding: 10px 20px;

font-size: 16px;
font-weight: 600;

border-radius: 16px;

background-color: var(--color-primary);
border: 1px solid var(--color-primary);
color: #EEEEEE;
`

export const StyledUserSection = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  gap: 50px;

  padding-top: 100px;

  @media (max-width:900px){
    padding-top: 20px;
    gap: 10px;
  }
`

export const StyledUserBg = styled.div`
background-color: var(--color-primary);
width: 100%;
height: 223px;
top: 0;
position: absolute;
@media (max-width:900px){
  max-height: 80px;
}
`

export const StyledUserCard = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-white);
  padding: 16px 24px;
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
  border-radius: 4px;
  gap: 20px;
  z-index: 1;
  background-color: white;
  
  @media (max-width:900px){
    max-width: 480px;
    width: 96%;
  }

  h2 {
    align-self: center;
    color: #4E2096;
    font-size: 24px;
    font-weight: 700;
  }
`

export const StyledCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 0 10px;
  gap: 4px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #4E2096;
  }

  span{
    font-size: 16px;
    font-weight: 600;
    color: var(--color-black);
  }
`


export const StyledCardUserBtns = styled.div`
    width: 100%;
    display: flex;
    gap: 3px;
    justify-content: space-around;

  & > button:first-child {
    width: 149px;
    height: 33px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 16px;
    color: #EEEEEE;
    font-size: 14px;
    font-weight: 600;
  }

  & > button:last-child{
    width: 149px;
    height: 33px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: #ffffff;
    border-radius: 16px;
    font-weight: 600;
  }

`