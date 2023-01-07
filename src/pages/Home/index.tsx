import { BooksList, BookSection, Picture, StyledHomeOff, BookContent, Container, Wrapper, BookFilter } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contextAPI/UserContext";
import Header from "../../components/header";
import profile from "../../assets/img/profile.jpg"
import { books, stores } from "../StorePage";
import { LoginForm } from "../../components/Form/Login";
import { Modal } from "../../components/Modal";
import { RegisterForm } from "../../components/Form/Register";
import { RegisterFormStore } from "../../components/Form/RegisterStore";

interface IBook {
  storeId: number,
  title: string,
  author: string,
  genre: string,
  resume: string,
  stock: number,
  id: number,
  avatar: string,
  state: string,
  price: number
}

export const Home = () => {
  const { user, onSubmitFunctionLogout, isOpen, setOpen, form, setForm } = useContext(UserContext)
  const [book, setBook] = useState<IBook[]>(books);
  const [bookFiltered, setBookFiltered] = useState(books);
  const [search, setSearch] = useState("");

  const listGenreFiltered = book.map(item => item.genre).filter((a, b) => book.map(item => item.genre).indexOf(a) === b);

  useEffect(() => {
    const booksFiltered = book.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));
    setBookFiltered(booksFiltered);
  }, [search]);

  function handleListFilter(genre: string) {

    const booksFiltered = book.filter(item => item.genre.toLowerCase() === genre.toLowerCase());

    setSearch("");
    setBookFiltered(booksFiltered);

  };

  function handleClickUser(form: React.ReactNode) {
    setForm(form)
    setOpen(true);
  }

  return (
    <>
      {isOpen && <Modal>{form}</Modal>}
      <StyledHomeOff isOpen={isOpen}>
        <Header>
          <div className="loginContent">
            <div className="btnContent">
              {!user
                ? <>
                  <button onClick={() => handleClickUser(<RegisterFormStore />)} className="btnRegister">Cadastro Loja</button>
                  <button onClick={() => handleClickUser(<RegisterForm />)} className="btnRegister">Cadastro Usuário</button>
                  <button onClick={() => handleClickUser(<LoginForm />)} className="btnLogin">Entrar</button>
                </>
                : <>
                  <Picture><img src={profile} alt={profile} /></Picture>
                  <button onClick={onSubmitFunctionLogout} className="btnLogout">Logout</button>
                </>
              }
            </div>
            <div className="search">
              <label htmlFor="">Pesquise o Título</label>
              <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" />
            </div>
          </div>
        </Header>
        <Container>
          <Wrapper>
            <BookFilter>
              <li onClick={() => setBookFiltered(book)}>Todos</li>
              {listGenreFiltered.map(item => <li onClick={() => handleListFilter(item)} key={item}>{item}</li>)}
            </BookFilter>
            {stores.map(store => {
              return (
                <BookSection key={store.id}>
                  <div>
                    <img src={store.avatar} alt={store.name} />
                  </div>
                  <BooksList>
                    {bookFiltered.map(book => {
                      return (
                        book.storeId === store.id &&
                        <BookContent key={book.id}>
                          <div>
                            <img src={book.avatar} alt={book.title} />
                          </div>
                          <div>
                            <h3>{book.title}</h3>
                            {user
                              ? <span>R$ {book.price}</span>
                              : <button>Vamos trocar?</button>
                            }
                          </div>
                        </BookContent>)
                    })}
                  </BooksList>
                </BookSection>
              )
            })}
          </Wrapper>
        </Container>
      </StyledHomeOff>
    </>
  );
};
