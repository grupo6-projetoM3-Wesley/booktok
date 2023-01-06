import styled from 'styled-components';

export const StyledUserPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
`

export const StyledUserSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const StyledUserBg = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  height: 223px;
`

export const StyledUserImg = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 160px;
  position: absolute;
  top: 160px;
  border: 3px solid white;
`
export const StyledUserCard = styled.div`
  width: 480px;
  height: 204px;
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
    color: #4E2096;
    font-size: 24px;
    font-weight: 700;
  }
`

export const StyledCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 4px;
  p{
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
  width: 90%;
  display: flex;
  justify-content: space-around;
`

export const StyledListSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey1);
  margin-top: 150px;

`

export const StyledListSectionTitle = styled.div`
width: 600px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--color-primary);
border: 1px solid var(--color-primary);
border-radius: 8px;
  h2{
    font-size: 20px;
    font-weight: 800;
    color: #EEEEEE;
  }
`

export const StyledFavoritList = styled.ul`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`

export const StyledBookCard = styled.li`
  width: 482px;
  height: 200px;
  display: flex;
  margin-top: 46px;
  background:var(--color-white);
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);
  border-radius: 4px;
  flex-wrap: wrap;
  img {
    width: 150px;
    height: 200px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    padding: 24px;
    gap: 8px;
    
  }
  p{
    font-size: 14px;
    font-weight: 600;
    color:#4E2096;
  }
  span{
    font-size: 14px;
    font-weight: 600;
    color: var(--color-black);
  }
`