import { useContext } from "react";
import { useForm } from "react-hook-form"
import { iUser, UserContext } from "../../../contextAPI/UserContext";
import { api } from "../../../services/api";
import { Container, Switch } from "./styles"

export interface iFormValues {
    title: string,
    author: string,
    genre: string,
    resume: string,
    stock: number,
    id: number,
    avatar: string,
    state: string,
    price: number
}

export const CreateBook = () => {
    const { user, books, setForm, setOpen } = useContext(UserContext)
    const { register, handleSubmit } = useForm<iFormValues>();

    async function onSubmitCreateBook(formValue: iFormValues) {
        const stock = books.filter(item => item.user.id === user?.id).find(item => item.title.toLowerCase() === formValue.title.toLowerCase());

        const newBook = {
            userId: user?.id,
            user,
            ...formValue,
            stock: stock ? stock.stock + 1 : 1
        }

        try {
            const token = localStorage.getItem("tokenUser");
            
            if (stock) {
                console.log(await api.patch("books/" + stock.id, newBook, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }))
            } else {
                console.log(await api.post("books/", newBook, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }))
            }
        } catch (error) {
            console.log(error);
            
        } finally {
            setForm(null);
            setOpen(false);
        }
    }

    return (
        <Container onSubmit={handleSubmit(onSubmitCreateBook)}>
            <h1>Cadastrar</h1>
            <input type="text" placeholder="Titulo"{...register("title")} />
            <input type="text" placeholder="Autor" {...register("author")} />
            <input type="text" placeholder="Genêro"  {...register("genre")} />
            <input type="text" placeholder="Resumo"  {...register("resume")} />
            <input type="text" placeholder="Foto do Livro" {...register("avatar")} />
            <input type="number" placeholder="Preço"  {...register("price")} />
            <input type="text" placeholder="Condição"  {...register("state")} />
            <button>Cadastrar</button>
        </Container >)
}