import { BooksList, BookSection, Picture, StyledHome, BookContent, Container, Wrapper, BookFilter } from "./style";
import { useContext, useEffect, useState } from "react";
import { iBook, UserContext } from "../../contextAPI/UserContext";
import Header from "../../components/header";
import profile from "../../assets/img/profile.jpg"
import { LoginForm } from "../../components/Form/Login";
import { Modal } from "../../components/Modal";
import { RegisterForm } from "../../components/Form/Register";
import { Book } from "../../components/Form/Book";


export const Home = () => {
  const { user, onSubmitFunctionLogout, isOpen, setOpen, form, setForm, books, stores } = useContext(UserContext)
  const [bookFiltered, setBookFiltered] = useState(books);
  const [search, setSearch] = useState("");

  const listGenreFiltered = books.map(item => item.genre).filter((a, b) => books.map(item => item.genre).indexOf(a) === b);

  useEffect(() => {
    const booksFiltered = books.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));
    setBookFiltered(booksFiltered);
  }, [search]);

  function handleListFilter(genre: string) {

    const booksFiltered = books.filter(item => item.genre.toLowerCase() === genre.toLowerCase());

    setSearch("");
    setBookFiltered(booksFiltered);

  };

  function handleModal(form: React.ReactNode) {
    setForm(form)
    setOpen(true);
  }

  return (
    <>
      {isOpen && <Modal>{form}</Modal>}
      <StyledHome isOpen={isOpen}>
        <Header>
          <div className="loginContent">
            <div className="btnContent">
              {!user
                ? <>
                  <button onClick={() => handleModal(<RegisterForm />)} className="btnRegister">Cadastrar</button>
                  <button onClick={() => handleModal(<LoginForm />)} className="btnLogin">Entrar</button>
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
            <>
              <BookFilter>
                <li onClick={() => setBookFiltered(books)}>Todos</li>
                {listGenreFiltered.map(item => <li onClick={() => handleListFilter(item)} key={item}>{item}</li>)}
              </BookFilter>
              {stores.map(store => {
                return (<BookSection key={store[0].user.id}>
                  <div>
                    <img src={store[0].user.avatar} alt={store[0].user.avatar} />
                  </div>
                  <BooksList>
                    {store.map(book => {
                      return (<BookContent key={book.id} onClick={(() => handleModal(<Book book={book} />))} >
                        <div >
                          <img src={book.avatar} alt={book.title} />
                        </div>
                        <div>
                          <h3>{book.title}</h3>
                          <span>R$ {book.price}</span>
                        </div>
                      </BookContent>)
                    })}
                  </BooksList>
                </BookSection>)
              })}
            </>
          </Wrapper>
        </Container>
      </StyledHome>
    </>
  );
};
