import { useContext } from "react";
import { UserContext } from "../../../contextAPI/UserContext";
import { Container } from "./styles"


export const RemoveFavForm = () => {
    const { onSubmitFunctionUpdateUser , user } = useContext(UserContext);


    return (
        <Container >
            <h1>Remover dos favoritos</h1>
            <h2>Deseja remover o livro?</h2>
            <p>O livro não sera mais encontrado nos seus favoritos!</p>
            <button>Sim! Remover</button>
        </Container>
    )
}