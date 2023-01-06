import React from "react";
import logo from "../../assets/img/booktok.png";
import { StyledStorePage } from "./style";

export const StorePage = () => {
  const store = {
    email: "store@store.com",
    password: "12345",
    name: "John Store",
    address: "Rua blablabla, 48",
    phone: "(51) 123456789",
    avatar:
      "https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg",
    plan: 1,
    id: 1,
  };

  return (
    <StyledStorePage>
      <header>
        <div className="header-div container">
          <img src={logo} alt="" />
          <div>
            <button>Home</button>
            <button>Logout</button>
          </div>
        </div>
      </header>
      <section className="store-info">
        <div className="avatar-bg"></div>
        <img src={store.avatar} alt="" />
        <div className="store-data">
          <h2>Dados da loja</h2>
          <p>
            Nome: <span>{store.name}</span>
          </p>
          <p>
            Email: <span>{store.email}</span>
          </p>
          <p>
            Quantidade de livros catalogados: <span>x</span>
          </p>
          <div>
            <button>Atualizar informações</button>
            <button>Mudar plano</button>
          </div>
        </div>
      </section>
      <section className="list-section">
        <button>Cadastrar novo livro</button>
        <div>
          <input placeholder="Pesquisar livro"></input>
          <button>Buscar</button>
        </div>
        <ul></ul>
      </section>
    </StyledStorePage>
  );
};
