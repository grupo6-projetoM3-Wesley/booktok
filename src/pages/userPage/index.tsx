import React from 'react'
import DeleteButton from '../../components/btnDeleteProfile'
import BtnHome from '../../components/btnHome'
import BtnLogout from '../../components/btnLogout'
import ButtonRemove from '../../components/btnRemove'
import ButtonUpdateAcount from '../../components/btnUpdateInfo'
import Header from '../../components/header'
import { StyledBookCard, StyledCardUserBtns, StyledCardUserInfo, StyledFavoritList, StyledHeaderNav, StyledListSection, StyledListSectionTitle, StyledUserBg, StyledUserCard, StyledUserImg, StyledUserPage, StyledUserSection } from './userpage'

export const user = {
  email: 'store@store.com',
  name: 'Teste de Uuarioa',
  birth_date: '26/06/2000',
  avatar:
    'https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg',
  id: 1,
};
export const favoritebooks = [
  {
    title: 'QUalquer coisa',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    id: 1,
    state: 'Novo',
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
  },
  {
    title: 'QUalquer coisa',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    id: 2,
    state: 'Semi-Novo',
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
  },
  {
    title: 'QUalquer coisa',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    id: 3,
    state: 'Novo',
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
  },
];

const UserPage = () => {

  return (
    <StyledUserPage>
      <Header>
        <StyledHeaderNav>
          <BtnHome />
          <BtnLogout />
        </StyledHeaderNav>
      </Header>
      <StyledUserSection>
        <StyledUserBg />
        <StyledUserImg src={user.avatar} />
        <StyledUserCard>
          <h2>Dados de usuário</h2>
          <StyledCardUserInfo>
            <p>Nome:<span>{user.name}</span></p>
            <p>Email:<span>{user.email}</span></p>
            <p>Data de nascimento:<span>{user.birth_date}</span></p>
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
          {favoritebooks.map((element) => {
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
  )
}

export default UserPage