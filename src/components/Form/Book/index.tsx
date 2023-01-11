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

    return (
        <Container>
            <h1>{title}</h1>
            <button type="button" onClick={handleFavorite}>Favoritar</button>
            <p>{resume} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis consequuntur assumenda pariatur animi molestiae asperiores minus eos. Sit ducimus sint porro doloribus, odio cumque fuga, unde blanditiis, veniam dicta beatae?</p>
            <button>Comprar</button>
        </Container>)
}