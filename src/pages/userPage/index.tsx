import React, { useContext } from 'react';
import profile from '../../assets/img/profile.jpg';
import { DeleteUser } from '../../components/Form/DeleteUser';
import { UpdateUser } from '../../components/Form/UpdateUser';
import Header from '../../components/Header';
import { Modal } from '../../components/Modal';
import { UserContext } from '../../contextAPI/UserContext';
import { api } from '../../services/api';
import {
  StyledBookCard,
  StyledCardUserBtns,
  StyledCardUserInfo,
  StyledFavoritList,
  StyledHeaderNav,
  StyledLink,
  StyledListSection,
  StyledListSectionTitle,
  StyledUserBg,
  StyledUserCard,
  StyledUserPage,
  StyledUserSection
} from './styles';

export const UserPage = () => {
  const {
    user,
    setUser,
    onSubmitFunctionLogout,
    setOpen,
    isOpen,
    setForm,
    form,
  } = useContext(UserContext);

  async function removeFavorite(id: number) {
    const newFavorite = user?.favorite?.filter((item) => item.id !== id);

    if (user?.favorite) {
      setUser({
        ...user,
        favorite: newFavorite,
      });
    }

    try {
      const token = localStorage.getItem('tokenUser');

      await api.patch('users/' + user?.id, user, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleModal(form: React.ReactNode) {
    setForm(form);
    setOpen(true);
  }

  return (
    <>
      {isOpen && <Modal>{form}</Modal>}
      <StyledUserPage isOpen={isOpen}>
        <Header>
          <StyledHeaderNav>
            <StyledLink to='/'>Home</StyledLink>
            <button onClick={onSubmitFunctionLogout}>Sair</button>
          </StyledHeaderNav>
        </Header>
        <StyledUserSection>
          <StyledUserBg />
          <img src={user?.avatar ? user.avatar : profile} alt={user?.name} />
          <StyledUserCard>
            <h2>Dados de usuário</h2>
            <StyledCardUserInfo>
              <p>
                Nome:<span>{user?.name}</span>
              </p>
              <p>
                Email:<span>{user?.email}</span>
              </p>
              <p>
                Data de nascimento:<span>{user?.birthDay}</span>
              </p>
            </StyledCardUserInfo>
            <StyledCardUserBtns>
              <button onClick={() => handleModal(<UpdateUser />)}>
                Atualizar
              </button>
              <button onClick={() => handleModal(<DeleteUser />)}>
                Deletar
              </button>
            </StyledCardUserBtns>
          </StyledUserCard>
        </StyledUserSection>
        <StyledListSection>
          <StyledListSectionTitle>
            <h2>Favoritos</h2>
          </StyledListSectionTitle>
          <StyledFavoritList>
            {user?.favorite?.map((element) => {
              return (
                <StyledBookCard key={element.id}>
                  <img src={element.avatar} alt='' />
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
                    <button onClick={() => removeFavorite(element.id)}>
                      Remover
                    </button>
                  </div>
                </StyledBookCard>
              );
            })}
          </StyledFavoritList>
        </StyledListSection>
      </StyledUserPage>
    </>
  );
};
