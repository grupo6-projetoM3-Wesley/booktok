import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UserContext } from '../../../contextAPI/UserContext';
import { api } from '../../../services/api';
import { Container } from './styles';

export interface iFormValues {
  title: string;
  author: string;
  genre: string;
  resume: string;
  stock: number;
  id: number;
  avatar: string;
  state: string;
  price: number;
}

export const CreateBook = () => {
  const {
    user,
    books,
    setForm,
    setOpen,
    setbookStoreFiltered,
    bookStoreFiltered,
  } = useContext(UserContext);
  const { register, handleSubmit } = useForm<iFormValues>();

  async function createBook(formValue: iFormValues) {
    const currentBook = books
      .filter((item) => item.user.id === user?.id)
      .find(
        (item) => item.title.toLowerCase() === formValue.title.toLowerCase()
      );

    const newBook = {
      userId: user?.id,
      user,
      ...formValue,
      stock: currentBook && currentBook.stock ? currentBook.stock + 1 : 1,
    };

    try {
      const token = localStorage.getItem('tokenUser');

      if (currentBook?.stock) {
        await api.patch('books/' + currentBook.id, newBook, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        toast.success('Livro criado com sucesso!', {
          autoClose: 1000,
        });
      } else {
        await api.post('books/', newBook, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        toast.success('Livro criado com sucesso!', {
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.error('Algo deu errado!', {
        autoClose: 1000,
      });
    } finally {
      if (user) {
        setbookStoreFiltered([...bookStoreFiltered, { ...newBook, user }]);
      }
      setForm(null);
      setOpen(false);
    }
  }

  return (
    <Container onSubmit={handleSubmit(createBook)}>
      <h1>Cadastrar</h1>
      <input type='text' placeholder='Titulo' {...register('title')} />
      <input type='text' placeholder='Autor' {...register('author')} />
      <input type='text' placeholder='Genêro' {...register('genre')} />
      <input type='text' placeholder='Resumo' {...register('resume')} />
      <input type='text' placeholder='Foto do Livro' {...register('avatar')} />
      <input type='number' placeholder='Preço' {...register('price')} />
      <input type='text' placeholder='Condição' {...register('state')} />
      <button>Cadastrar</button>
    </Container>
  );
};
