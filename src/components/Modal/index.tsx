import { useContext } from "react";
import { UserContext } from "../../contextAPI/UserContext";
import { Container, Content, Wrapper } from "./styles"

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const { setForm, setOpen } = useContext(UserContext);

    function closeModal() {
        setForm(null);
        setOpen(false);
    }

    return (
        <Container>
            <Wrapper>
                <header>
                    <button onClick={closeModal}>X</button>
                </header>
                <Content>
                    {children}
                </Content>
                <footer />
            </Wrapper>
        </Container>);
}