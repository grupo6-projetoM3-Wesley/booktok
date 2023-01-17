import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { LoginForm } from '../components/Form/Login';
import { boolean } from 'yup';

interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iDataRegisterUser {
  email: string;
  password: string;
  name: string;
  passwordConfirm?: string;
  address: string;
  avatar?: string;
  birthDay?: string;
  phone: string;
  isStore: boolean;
}

export interface iDataUpdateUser {
  email?: string;
  password?: string;
  name?: string;
  address?: string;
  avatar?: string;
  birthDay?: string;
  phone?: string;
}

export interface iUser {
  id: string;
  avatar?: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  password?: string;
  birthDay?: string;
  isStore: boolean;
  favorite?: iBook[];
}

export interface iBook {
  user: iUser;
  title: string;
  author: string;
  genre: string;
  resume: string;
  stock?: number;
  id: number;
  avatar: string;
  state: string;
  price: number;
}

interface iUserContextTypes {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;

  books: iBook[];
  stores: iBook[][];
  bookFiltered: iBook[][];
  setBookFiltered: React.Dispatch<React.SetStateAction<iBook[][]>>;

  bookStore: iBook[];
  setBookStore: React.Dispatch<React.SetStateAction<iBook[]>>;
  bookStoreFiltered: iBook[];
  setbookStoreFiltered: React.Dispatch<React.SetStateAction<iBook[]>>;

  userLogin: (data: iDataLogin) => Promise<void>;
  onSubmitFunctionLogout: () => void;
  createUser: (data: iDataRegisterUser) => Promise<void>;
  updateUser: (data: iDataUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;

  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: React.ReactNode | null;
  setForm: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
  att: boolean;
  setAtt: React.Dispatch<React.SetStateAction<boolean>>;

  getAllBooks: () => Promise<void>;
  closeModal: () => void;
}

export const UserContext = createContext({} as iUserContextTypes);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [stores, setStores] = useState<iBook[][]>([]);
  const [books, setBooks] = useState<iBook[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [form, setForm] = useState<React.ReactNode | null>(null);
  const [bookFiltered, setBookFiltered] = useState<iBook[][]>([]);
  const [bookStore, setBookStore] = useState<iBook[]>([]);
  const [bookStoreFiltered, setbookStoreFiltered] = useState<iBook[]>([]);
  const [att, setAtt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getAllBooks();
      console.log('home');
    })();
  }, [att]);

  function closeModal() {
    setForm(null);
    setOpen(false);
    window.speechSynthesis.cancel();
    setAtt(!att);
  }

  const getAllBooks = async () => {
    const { data } = await api.get<iBook[]>('books');

    setBooks(data);

    const groupUsersByID: iBook[][] = data.reduce((acc: any, obj: iBook) => {
      let key = `${obj.user.isStore ? 'Store' : 'User'}:${obj.user.id}`;

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    const getStoreInGroup: iBook[][] = Object.entries(groupUsersByID)
      .filter((item) => item[0].startsWith('Store'))
      .map((item) => item[1]);

    if (user) {
      const storeBooksFiltered = books.filter(
        (book) => book.user.id === user?.id
      );
      setBookStore(storeBooksFiltered);
      setbookStoreFiltered(storeBooksFiltered);
    }

    setStores(getStoreInGroup);
    setBookFiltered(getStoreInGroup);
  };

  const userLogin = async (data: iDataLogin) => {
    try {
      const response = await api.post('/login', data);

      setUser(response.data.user);
      toast.success('Login feito com sucesso, redirecionando...', {
        autoClose: 1000,
      });

      localStorage.setItem('tokenUser', response.data.accessToken);
      setOpen(false);
    } catch (error) {
      toast.error('E-mail ou senha incorretos', {
        autoClose: 1000,
      });
    }
  };

  const createUser = async (data: iDataRegisterUser) => {
    delete data.passwordConfirm;
    const favorite: iBook[] = [];

    try {
      await api.post('users', { ...data, favorite });
      toast.success('Cadastro feito com sucesso, redirecionando...', {
        autoClose: 1000,
      });

      setForm(<LoginForm />);
    } catch (error) {
      toast.error('Não foi possível cadastrar esse usuário', {
        autoClose: 1000,
      });
    }
  };

  const updateUser = async (data: iDataUpdateUser) => {
    try {
      const token = localStorage.getItem('tokenUser');
      const response = await api.patch('users/' + user?.id, data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      toast.success('Usuário atualizado, redirecionando...', {
        autoClose: 1000,
      });
      setUser(response.data.user);
    } catch (error) {
      toast.error('Não foi possível atualizar esse usuário', {
        autoClose: 1000,
      });
    } finally {
      setForm(null);
      setOpen(false);
    }
  };

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem('tokenUser');
      await api.delete('users/' + user?.id, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      toast.success('Usuário deletado, redirecionando...', {
        autoClose: 1000,
      });
      setUser(null);
      setForm(null);
      setOpen(false);
      localStorage.clear();

      navigate('/');
    } catch (error) {
      toast.error('Não foi possível deletar esse usuário', {
        autoClose: 1000,
      });
    }
  };

  const onSubmitFunctionLogout = () => {
    localStorage.clear();
    toast.success('Usuário deslogado, redirecionando...', {
      autoClose: 1000,
    });
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        books,
        stores,
        bookFiltered,
        setBookFiltered,
        bookStore,
        setBookStore,
        bookStoreFiltered,
        setbookStoreFiltered,
        isOpen,
        setOpen,
        form,
        setForm,
        userLogin,
        onSubmitFunctionLogout,
        createUser,
        updateUser,
        deleteUser,
        getAllBooks,
        att,
        setAtt,
        closeModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
