import React, { useContext, useState } from 'react';
import logo from '../../assets/img/booktok.png';
import { UserContext } from '../../contextAPI/UserContext';
import { StyledCard, StyledStorePage } from './style';


export const StorePage = () => {
  const { user, books } = useContext(UserContext)
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filter, setFilter] = useState(' ' || undefined);

  const bookFilter = (event: string) => {
    if (event === '') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((element) => element.title === event));
    }
  };


  return (
    <StyledStorePage>
      <header>
        <div className='header-div container'>
          <img src={logo} alt='' />
          <div>
            <button>Home</button>
            <button>Logout</button>
          </div>
        </div>
      </header>
      <section className='store-info'>
        <div className='avatar-bg'></div>
        {user?.avatar && <img src={user.avatar} alt='' />}
        <div className='store-data'>
          <h2>Dados da loja</h2>
          <p>
            Nome: <span>{user?.name}</span>
          </p>
          <p>
            Email: <span>{user?.email}</span>
          </p>
          <p>
            Quantidade de livros catalogados: <span>{books.length}</span>
          </p>
          <div>
            <button>Atualizar informações</button>
            <button>Mudar plano</button>
          </div>
        </div>
      </section>
      <section className='list-section'>
        <div className='new-book'>
          <button>Cadastrar novo livro</button>
          <div className='filter-div'>
            <input
              placeholder='Pesquisar livro'
              onChange={(event) => setFilter(event.target.value)}
            ></input>
            <button onClick={() => bookFilter(filter)}>Buscar</button>
          </div>
        </div>
        <ul>
          {filteredBooks.map((element) => {
            if (element === null) {
              return <div></div>;
            } else {
              return (
                <StyledCard key={element.id}>
                  <img src={element.avatar} alt='' />
                  <div>
                    <p>
                      Título: <span>{element.title}</span>
                    </p>
                    <p>
                      Autor: <span>{element.author}</span>
                    </p>
                    <p>
                      Estoque: <span>{element.stock}</span>
                    </p>
                    <p>
                      Estado do livro: <span>{element.state}</span>
                    </p>
                    <button>Atualizar</button>
                  </div>
                </StyledCard>
              );
            }
          })}
        </ul>
      </section>
    </StyledStorePage>
  );
};
