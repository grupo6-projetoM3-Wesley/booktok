import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../../contextAPI/UserContext";
import { RegisterForm } from "../Register";
import { Container } from "./styles"

interface IFormValues {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const { onSubmitFunctionLogin, setForm } = useContext(UserContext);
    const { register, handleSubmit } = useForm<IFormValues>();

    return (
        <Container onSubmit={handleSubmit(onSubmitFunctionLogin)}>
            <h1>Login</h1>
            <input type="email" placeholder="E-mail" {...register("email")} />
            <input type="password" placeholder="Senha" {...register("password")} />
            <button>Entrar</button>
            <p>Ainda não tem cadastro? <span onClick={() => setForm(<RegisterForm />)}>Clique aqui</span> para se cadastrar</p>
        </Container>)
}