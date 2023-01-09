import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../../contextAPI/UserContext";
import { Container } from "./styles"

interface IFormValues {
    email: string;
    password: string;
    name: string;
    passwordConfirm: string;
    address: string;
    phone: string;
}

export const RegisterForm = () => {
    const { onSubmitFunctionRegister } = useContext(UserContext);
    const { register, handleSubmit } = useForm<IFormValues>();


    return (
        <Container onSubmit={handleSubmit(onSubmitFunctionRegister)}>
            <h1>Cadastrar</h1>
            <input type="text" placeholder="Nome"{...register("name")} />
            <input type="email" placeholder="E-mail" {...register("email")} />
            <input type="password" placeholder="Senha"  {...register("password")} />
            <input type="password" placeholder="Confirmar Senha"  {...register("passwordConfirm")} />
            <input type="text" placeholder="Endereço (envio)" {...register("address")} />
            <input type="text" placeholder="Telefone"  {...register("phone")} />
            <button>Cadastrar</button>
        </Container>)
}