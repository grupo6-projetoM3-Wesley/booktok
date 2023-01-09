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
    avatar: string;
}

export const UpdateForm = () => {
    const { onSubmitFunctionUpdateUser , user } = useContext(UserContext);
    const { register, handleSubmit } = useForm<IFormValues>();


    return (
        <Container >
            <h1>Atualizar</h1>
            <input type="text" placeholder="Nome"{...register("name")} />
            <input type="email" placeholder="E-mail" {...register("email")} />
            <input type="text" placeholder="Endereço (envio)" {...register("address")} />
            <input type="text" placeholder="Imagem do perfil (URL)" {...register("avatar")} />
            <input type="text" placeholder="Telefone"  {...register("phone")} />
            <button>Atualizar</button>
        </Container>)
}