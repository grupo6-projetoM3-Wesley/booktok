import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../../contextAPI/UserContext";
import { Container } from "./styles"

interface iFormValues {
    id: string;
    avatar?: string;
    name: string;
    password: string;
    email: string;
    address: string;
    phone: string;
    birthDay?: string;
    isStore: boolean;
}

export const UpdateUser = () => {
    const { user } = useContext(UserContext);
    const { onSubmitFunctionUpdateUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm<iFormValues>();

    return (
        <Container onSubmit={handleSubmit(onSubmitFunctionUpdateUser)}>
            <h1>Atualizar</h1>
            <input type="text" placeholder="Nome" value={user?.name} {...register("name")} />
            <input type="email" placeholder="E-mail" value={user?.email} {...register("email")} />
            <input type="password" placeholder="Senha" value={user?.password} {...register("password")} />
            <input type="text" placeholder="Endereço (envio)" value={user?.address} {...register("address")} />
            <input type="text" placeholder="Data de Nascimento" value={user?.birthDay} {...register("birthDay")} />
            <input type="text" placeholder="Imagem do perfil (URL)" value={user?.avatar} {...register("avatar")} />
            <input type="text" placeholder="Telefone"  value={user?.phone} {...register("phone")} />
            <button>Atualizar</button>
        </Container>
    )
}