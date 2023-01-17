import { useContext } from 'react';
import { UserContext } from '../../../contextAPI/UserContext';
import { iBook } from '../../../contextAPI/UserContext';
import { Container } from './styles';
import play from '../../../assets/img/play.svg';
import pause from '../../../assets/img/pause.svg';
import fav from '../../../assets/img/fav.svg';

interface iBookProps {
  book: iBook;
}

export const Book = ({ book }: iBookProps) => {
  const { user, setUser, books } = useContext(UserContext);
  const { title, resume, avatar, id } = book;
  const utterance = new SpeechSynthesisUtterance();
  const userFind = books.find((item) => item.id === id);

  utterance.text = resume;

  function handleFavorite() {
    if (user) {
      const isExist = user.favorite?.some((item) => item.id === book.id);

      if (isExist) {
        return;
      }

      if (user.favorite) {
        const newFavorites = [...user.favorite, book];
        const newUser = {
          ...user,
          favorite: newFavorites,
        };
        setUser(newUser);
      }
    }
  }

  function readToMe() {
    window.speechSynthesis.speak(utterance);
  }

  function stopReading() {
    window.speechSynthesis.cancel();
  }

  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <img src={avatar} alt='' />
        <p>{resume.substring(0, 500)}...</p>
      </div>
      <div className='buttons-div'>
        <button type='button' onClick={handleFavorite}>
          <img src={fav} alt='' />
          Favoritar
        </button>
        <button type='button' onClick={() => readToMe()}>
          <img src={play} alt='' />
          Leitura
        </button>
        <button type='button' onClick={() => stopReading()}>
          <img src={pause} alt='' />
          Parar
        </button>
      </div>
      <p>Endereço: {userFind?.user.address}</p>
    </Container>
  );
};
