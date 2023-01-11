import { BooksList, BookSection, StyledHome, BookContent, Container, Wrapper, BookFilter, StyledLink, Content } from "./style";
import { useContext, useEffect, useState } from "react";
import { iBook, UserContext } from "../../contextAPI/UserContext";
import Header from "../../components/Header";
import profile from "../../assets/img/profile.jpg"
import { LoginForm } from "../../components/Form/Login";
import { Modal } from "../../components/Modal";
import { RegisterForm } from "../../components/Form/Register";
import { Book } from "../../components/Form/Book";


export const Home = () => {
  const { user, setBookFiltered, bookFiltered, onSubmitFunctionLogout, isOpen, setOpen, form, setForm, books, stores } = useContext(UserContext)

  const [search, setSearch] = useState("");

  const listGenreFiltered = books.map(item => item.genre).filter((a, b) => books.map(item => item.genre).indexOf(a) === b);

  useEffect(() => {
    const booksFiltered = books.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));

    const gambiarrinha = gambiarra(booksFiltered);

    setBookFiltered(gambiarrinha);

  }, [search]);

  function gambiarra(gambiarrinha: iBook[]) {
    const groupUsersByID: iBook[][] = gambiarrinha.reduce((acc: any, obj: iBook) => {
      let key = `${obj.user.isStore ? "Store" : "User"}:${obj.user.id}`

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    const getStoreInGroup: iBook[][] = Object.entries(groupUsersByID).filter(item => item[0].startsWith("Store")).map(item => item[1]);
    return getStoreInGroup;
  }

  function handleListFilter(genre: string) {
    const booksFiltered = books.filter(item => item.genre.toLowerCase() === genre.toLowerCase());

    const gambiarrinha = gambiarra(booksFiltered);

    setSearch("");
    setBookFiltered(gambiarrinha);

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
          <Content>
            <div>
              {!user
                ? <div>
                  <button onClick={() => handleModal(<RegisterForm />)} className="btnRegister">Cadastrar</button>
                  <button onClick={() => handleModal(<LoginForm />)} className="btnLogin">Entrar</button>
                </div>
                : <div>
                  <StyledLink to={user.isStore ? "/dashboard" : "/userdash"}><img src={user.avatar ? user.avatar : profile} alt={user.name} /></StyledLink>
                  <button onClick={onSubmitFunctionLogout} className="btnLogout">Sair</button>
                </div>
              }
            </div>
            <div>
              <label hidden htmlFor="search">Pesquise o Título</label>
              <input value={search} name="search" onChange={(event) => setSearch(event.target.value)} placeholder="Pesquise o Título" type="text" />
            </div>
          </Content>
        </Header>
        <Container>
          <Wrapper>
            <>
              <BookFilter>
                <li onClick={() => setBookFiltered(stores)}>Todos</li>
                {listGenreFiltered.map(item => <li onClick={() => handleListFilter(item)} key={item}>{item}</li>)}
              </BookFilter>
              {bookFiltered.map(store => {
                return (
                <BookSection key={store[0].user.id}>
                  <div>
                    <img src={store[0].user.avatar} alt={store[0].user.avatar} />
                  </div>
                  <BooksList>
                    {store.map(book => {
                      return (
                        <BookContent key={book.id} onClick={(() => handleModal(<Book book={book} />))} >
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
