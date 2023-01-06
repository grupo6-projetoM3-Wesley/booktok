import React from "react";
import { StyledHomeOff } from "./style";
import logo from "../../assets/img/booktok.png";

export const HomeOffline = () => {
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
      </main>
    </StyledHomeOff>
  );
};
