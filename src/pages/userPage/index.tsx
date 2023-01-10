import React, { useContext } from 'react'
import DeleteButton from '../../components/btnDeleteProfile'
import BtnHome from '../../components/btnHome'
import BtnLogout from '../../components/btnLogout'
import ButtonRemove from '../../components/btnRemove'
import ButtonUpdateAcount from '../../components/btnUpdateInfo'
import Header from '../../components/header'
import { StyledBookCard, StyledCardUserBtns, StyledCardUserInfo, StyledFavoritList, StyledHeaderNav, StyledListSection, StyledListSectionTitle, StyledUserBg, StyledUserCard, StyledUserImg, StyledUserPage, StyledUserSection } from './userpage'
import { UserContext } from '../../contextAPI/UserContext'
import { Modal } from '../../components/Modal'


const UserPage = () => {
  const { user } = useContext(UserContext)
  const { isOpen, form } = useContext(UserContext)

  return (
    <>
      {isOpen && <Modal>{form}</Modal>}
      <StyledUserPage >
        <Header>
          <StyledHeaderNav>
            <BtnHome />
            <BtnLogout />
          </StyledHeaderNav>
        </Header>
        <StyledUserSection>
          <StyledUserBg />
          <StyledUserImg src={user?.avatar} />
          <StyledUserCard>
            <h2>Dados de usuário</h2>
            <StyledCardUserInfo>
              <p>Nome:<span>{user?.name}</span></p>
              <p>Email:<span>{user?.email}</span></p>
              <p>Data de nascimento:<span>{user?.birthDay}</span></p>
            </StyledCardUserInfo>
            <StyledCardUserBtns>
              <ButtonUpdateAcount />
              <DeleteButton />
            </StyledCardUserBtns>
          </StyledUserCard>
        </StyledUserSection>
        <StyledListSection>
          <StyledListSectionTitle><h2>Favoritos</h2></StyledListSectionTitle>
          <StyledFavoritList>
            {user?.favorite?.map((element) => {
              return (
                <StyledBookCard key={element.id}>
                  <img src={element.avatar} alt="" />
                  <div>
                    <p>
                      Título: <span>{element.title}</span>
                    </p>
                    <p>
                      Autor: <span>{element.author}</span>
                    </p>
                    <p>
                      Genero: <span>{element.genre}</span>
                    </p>
                    <p>
                      Estado do livro: <span>{element.state}</span>
                    </p>
                    <ButtonRemove />
                  </div>
                </StyledBookCard>
              )
            })}
          </StyledFavoritList>
        </StyledListSection>
      </StyledUserPage>


    </>

  )
}

export default UserPage