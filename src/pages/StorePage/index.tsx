import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/booktok.png';
import profile from "../../assets/img/profile.jpg"
import { CreateBook } from '../../components/Form/CreateBook';
import { DeleteUser } from '../../components/Form/DeleteUser';
import { UpdateBook } from '../../components/Form/UpdateBook';
import { UpdateUser } from '../../components/Form/UpdateUser';
import Header from '../../components/Header';
import { Modal } from '../../components/Modal';
import { iBook, UserContext } from '../../contextAPI/UserContext';
import { Content, StyledCard, StyledCardUserBtns, StyledCardUserInfo, StyledHeaderNav, StyledLink, StyledStorePage, StyledUserBg, StyledUserCard, StyledUserSection } from './style';


export const StorePage = () => {
  const { user, books, onSubmitFunctionLogout, setForm, setOpen, isOpen, form } = useContext(UserContext)
  const [bookFiltered, setBookFiltered] = useState<iBook[]>(books);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const storeBooks = books.filter(item => item.user.id === user?.id)
    setBookFiltered(storeBooks);

  }, [])

  useEffect(() => {
    const booksFiltered = books.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));
    setBookFiltered(booksFiltered);
  }, [search]);

  function handleModal(form: React.ReactNode) {
    setForm(form);
    setOpen(true);
  }

  return (
    <>
      {isOpen && <Modal>{form}</Modal>}
      <StyledStorePage isOpen={isOpen}>
        <Header>
          <StyledHeaderNav>
            <StyledLink to="/" >Home</StyledLink>
            <button onClick={onSubmitFunctionLogout}>Sair</button>
          </StyledHeaderNav>
        </Header>
        <StyledUserSection>
          <StyledUserBg />
          <img src={user?.avatar ? user.avatar : profile} alt={user?.name} />
          <StyledUserCard>
            <h2>Dados da Loja</h2>
            <StyledCardUserInfo>
              <p>Nome<span> {user?.name}</span></p>
              <p>Email<span> {user?.email}</span></p>
              <p>Endereço<span> {user?.address} </span></p>
              <p>Quantidade<span> {bookFiltered.length}</span></p>
            </StyledCardUserInfo>
            <StyledCardUserBtns>
              <button onClick={() => handleModal(<UpdateUser />)}>Atualizar</button>
              <button onClick={() => handleModal(<DeleteUser />)}>Deletar</button>
            </StyledCardUserBtns>
          </StyledUserCard>
        </StyledUserSection>
        <section className='list-section'>
          <div className='new-book'>
            <button onClick={() => handleModal(<CreateBook/>)}>Cadastrar novo livro</button>
            <div className='filter-div'>
              <input
                placeholder='Pesquisar livro'
                onChange={(event) => setSearch(event.target.value)}
              >
              </input>
            </div>
          </div>
          <ul>
            {bookFiltered.map((book) => {
              return (
                <StyledCard key={book.id}>
                  <img src={book.avatar} alt='' />
                  <div>
                    <p>
                      Título: <span>{book.title}</span>
                    </p>
                    <p>
                      Autor: <span>{book.author}</span>
                    </p>
                    <p>
                      Estoque: <span>{book.stock}</span>
                    </p>
                    <p>
                      Estado do livro: <span>{book.state}</span>
                    </p>
                    <button onClick={() => handleModal(<UpdateBook {...book}/>)}>Atualizar</button>
                  </div>
                </StyledCard>
              );
            }
            )}
          </ul>
        </section>
      </StyledStorePage>
    </>)
};
