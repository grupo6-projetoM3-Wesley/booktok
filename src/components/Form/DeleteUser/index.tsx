import { useContext } from "react";
import { UserContext } from "../../../contextAPI/UserContext";
import { Container } from "./styles"


export const DeleteUser = () => {
    const { onSubmitDeleteUser } = useContext(UserContext);

    async function deleteMe() {
        await onSubmitDeleteUser();
    }

    return (
        <Container >
            <h1>Deletar conta</h1>
            <h2> Você deseja deletar sua conta?</h2>
            <p>Todas as  suas configurações serão perdidas!</p>
            <button type="button" onClick={deleteMe}>Sim! Deletar</button>
        </Container>
    )
}