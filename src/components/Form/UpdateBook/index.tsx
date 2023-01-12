import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UserContext } from '../../../contextAPI/UserContext';
import { api } from '../../../services/api';
import { Container } from './styles';

interface IFormValues {
  title: string;
  author: string;
  genre: string;
  resume: string;
  stock?: number;
  avatar: string;
  state: string;
  price: number;
  id: number;
}

export const UpdateBook = ({
  id,
  title,
  author,
  genre,
  resume,
  avatar,
  price,
  state,
}: IFormValues) => {
  const {
    user,
    books,
    setForm,
    setOpen,
    bookStoreFiltered,
    setbookStoreFiltered,
    getAllBooks,
  } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IFormValues>();

  async function updateBook(formValue: IFormValues) {
    // const book = books.filter(item => item.user.id === user?.id).find(item => item.id === id);

    try {
      const token = localStorage.getItem('tokenUser');

      console.log(
        await api.patch('books/' + id, formValue, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
      );
      toast.success('Livro atualizado com sucesso!', {
        autoClose: 1000,
      });
    } catch (error) {
      toast.success('Livro editado com sucesso!', {
        autoClose: 1000,
      });
    } finally {
      if (user) {
        const newBooks = bookStoreFiltered.filter((item) => {
          if (item.id === id) {
            return {
              ...formValue,
              user,
            };
          }
          return item;
        });
        setbookStoreFiltered(newBooks);
      }
      await getAllBooks();
      setForm(null);
      setOpen(false);
    }
  }

  return (
    <Container onSubmit={handleSubmit(updateBook)}>
      <h1>Cadastrar</h1>
      <input
        type='text'
        placeholder='title'
        defaultValue={title}
        {...register('title')}
      />
      <input
        type='text'
        placeholder='author'
        defaultValue={author}
        {...register('author')}
      />
      <input
        type='text'
        placeholder='genre'
        defaultValue={genre}
        {...register('genre')}
      />
      <input
        type='text'
        placeholder='resume'
        defaultValue={resume}
        {...register('resume')}
      />
      <input
        type='text'
        placeholder='avatar'
        defaultValue={avatar}
        {...register('avatar')}
      />
      <input
        type='text'
        placeholder='price'
        defaultValue={price}
        {...register('price')}
      />
      <input
        type='text'
        placeholder='state'
        defaultValue={state}
        {...register('state')}
      />
      <button>Atualizar</button>
    </Container>
  );
};
