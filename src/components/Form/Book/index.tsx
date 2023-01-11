import { useContext } from "react";
import { UserContext } from "../../../contextAPI/UserContext";
import { iBook } from "../../../contextAPI/UserContext";
import { Container } from "./styles";

interface iBookProps {
    book: iBook
}

export const Book = ({ book }: iBookProps) => {
    const { user, setUser } = useContext(UserContext)
    const { title, resume } = book;
    const utterance = new SpeechSynthesisUtterance()

    utterance.text = resume;

    function handleFavorite() {
        if (user) {
            const isExist = user.favorite?.some(item => item.id === book.id)

            if (isExist) {
                return;
            }

            if (user.favorite) {
                const newFavorites = [...user.favorite, book]
                const newUser = {
                    ...user,
                    favorite: newFavorites,
                }
                setUser(newUser)
            }
        }
    }


    function readToMe() {
        if (!window.speechSynthesis.paused) {
            window.speechSynthesis.speak(utterance)
            return;
        }
        window.speechSynthesis.resume();
    }

    function stopReading() {
        window.speechSynthesis.pause();
    }

    return (
        <Container>
            <h1>{title}</h1>
            <button type="button" onClick={handleFavorite}>Favoritar</button>
            <button type="button" onClick={() => readToMe()}>Ler</button>
            <button type="button" onClick={() => stopReading()}>Parar</button>
            <p>{resume}</p>
            <button>Comprar</button>
        </Container>)
}