import React, { useState } from 'react';
import logo from '../../assets/img/booktok.png';
import { StyledCard, StyledStorePage } from './style';

export const stores = [
  {
    email: 'store@store.com',
    password: '12345',
    name: 'John Store',
    address: 'Rua blablabla, 48',
    phone: '(51) 123456789',
    avatar:
      'https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg',
    plan: 1,
    id: 1,
  },
  {
    email: 'store2@store.com',
    password: '12345',
    name: 'John Store',
    address: 'Rua blablabla, 48',
    phone: '(51) 123456789',
    avatar:
      'https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg',
    plan: 2,
    id: 2,
  }
]

export const store = {
  email: 'store@store.com',
  password: '12345',
  name: 'John Store',
  address: 'Rua blablabla, 48',
  phone: '(51) 123456789',
  avatar:
    'https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg',
  plan: 1,
  id: 1,
};

export const books = [
  {
    storeId: 1,
    title: 'banana',
    author: 'aaaaaa',
    genre: 'terror',
    resume: 'lorem ipsum',
    stock: 3,
    id: 1,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 24.9
  },
  {
    storeId: 1,
    title: 'maça',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 8,
    id: 2,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 25
  },
  {
    storeId: 1,
    title: 'uva',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 3,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 244.9
  },
  {
    storeId: 2,
    title: 'limão',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 4,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
  {
    storeId: 2,
    title: 'pessêgo',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 5,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
  {
    storeId: 2,
    title: 'jabuticaba',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 6,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
  {
    storeId: 2,
    title: 'laranja',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 7,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
  {
    storeId: 2,
    title: 'mamão',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 8,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
  {
    storeId: 2,
    title: 'amora',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 9,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
  {
    storeId: 2,
    title: 'melância',
    author: 'aaaaaa',
    genre: 'action',
    resume: 'lorem ipsum',
    stock: 15,
    id: 10,
    avatar:
      'https://anatomiadapalavra.files.wordpress.com/2018/03/livro-o-gigante-enterrado-capa.png?w=730',
    state: 'Novo',
    price: 124.9
  },
];

export const StorePage = () => {


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
        <img src={store.avatar} alt='' />
        <div className='store-data'>
          <h2>Dados da loja</h2>
          <p>
            Nome: <span>{store.name}</span>
          </p>
          <p>
            Email: <span>{store.email}</span>
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
