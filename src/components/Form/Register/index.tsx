import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../../contextAPI/UserContext";
import { Container, Switch } from "./styles"

interface IFormValues {
    email: string;
    password: string;
    name: string;
    passwordConfirm: string;
    address: string;
    birthDay: string;
    phone: string;
    avatar?:string;
    isStore: boolean
}

export const RegisterForm = () => {
    const { onSubmitFunctionRegister } = useContext(UserContext);
    const { register, handleSubmit } = useForm<IFormValues>();
    const [checked, setChecked] = useState(false);

    function handleSwitch() {
        setChecked(true)
    }

    return (
        <Container onSubmit={handleSubmit(onSubmitFunctionRegister)}>
            <h1>Cadastrar</h1>
            <input type="text" placeholder="Nome"{...register("name")} />
            <input type="email" placeholder="E-mail" {...register("email")} />
            <input type="password" placeholder="Senha"  {...register("password")} />
            <input type="password" placeholder="Confirmar Senha"  {...register("passwordConfirm")} />
            <input type="text" placeholder="Endereço (envio)" {...register("address")} />
            <input type="text" placeholder="Telefone"  {...register("phone")} />
            <input type="text" placeholder="Avatar"  {...register("avatar")} />
            <Switch>
                <label className="switch">
                    <input type="checkbox" {...register("isStore")} />
                    <span className="slider round"></span>
                    <span className="first">Pessoa Física</span>
                    <span className="last">Pessoa Jurídica</span>
                </label>
            </Switch>
            <button>Cadastrar</button>

        </Container >)
}