import React, { useState } from "react";
import { StyledHomeOff } from "./style";
import logo from "../../assets/img/booktok.png";
import imgSebo from "../../assets/img/img_home/img_sebos/image.png";
import imgSebo2 from "../../assets/img/img_home/img_sebos/image (1).png";
import imgBook from "../../assets/img/img_home/img_books/Harry Potter 1.jpg";

export const HomeOffline = () => {
  const [seboList, setSeboList] = useState([
    {
      name: "Verso e prosa",
      img_sebo: imgSebo,
      stock: [
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
      ],
    },
    {
      name: "Livraria da rua",
      img_sebo: imgSebo2,
      stock: [
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
        {
          name: "Harry Poter",
          gen: ["aventura,ficção"],
          price: 20,
          img: imgBook,
        },
      ],
    },
  ]);
  return (
    <StyledHomeOff>
      <main>
        <header>
          <div className="headerContent">
            <img className="imgLogo" src={logo} alt="booktok" />
            <div className="loginContent">
              <div className="btnContent">
                <button className="btnRegister">Cadastro Loja</button>
                <button className="btnRegister">Cadastro Usuário</button>
                <button className="btnLogin">Entrar</button>
              </div>
              <div className="search">
                <label htmlFor="">Pesquise o Título</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </header>
        <section className="btnMenu">
          <div className="btnMenuContent">
            <button className="btnGen">FICÇÃO</button>
            <button className="btnGen">AVENTURA</button>
            <button className="btnGen">TERROR</button>
            <button className="btnGen">CULINÁRIA</button>
            <button className="btnGen">MÚSICA</button>
            <button className="btnGen">ROMANCE</button>
            <button className="btnGen">BIOGRAFIA</button>
            <button className="btnGen">POEMAS</button>
          </div>
        </section>
        <section className="sectionLists">
          <ul className="storeList">
            {seboList.map((list) => {
              return (
                <li className="storeListMap">
                  <img className="imgSebo" src={list.img_sebo} alt="" />
                  <ul className="cardList">
                    {list.stock.map((book) => {
                      return (
                        <li className="cardListMap">
                          <img className="imgBook" src={book.img} alt="" />
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </StyledHomeOff>
  );
};
