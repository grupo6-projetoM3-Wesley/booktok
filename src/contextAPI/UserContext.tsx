import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

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

  getAllBooks: () => Promise<void>;
}

export const UserContext = createContext({} as iUserContextTypes);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [stores, setStores] = useState<iBook[][]>([]);
  const [books, setBooks] = useState<iBook[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [form, setForm] = useState<React.ReactNode | null>(null);
  const [bookFiltered, setBookFiltered] = useState<iBook[][]>([]);
  const [bookStore, setBookStore] = useState<iBook[]>([])
  const [bookStoreFiltered, setbookStoreFiltered] = useState<iBook[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getAllBooks()
    })();
  }, [user]);

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
      const storeBooksFiltered = books.filter(book => book.user.id === user?.id);
      setBookStore(storeBooksFiltered);
      setbookStoreFiltered(storeBooksFiltered);
    }

    setStores(getStoreInGroup);
    setBookFiltered(getStoreInGroup);
  }

  const userLogin = async (data: iDataLogin) => {
    try {
      const response = await api.post('/login', data);

      setUser(response.data.user);

      localStorage.setItem('tokenUser', response.data.accessToken);
      setOpen(false);
    } catch (error) {
      console.log('Usuário e/ou senha inválido(s)');
    }
  };

  const createUser = async (data: iDataRegisterUser) => {
    delete data.passwordConfirm

    try {
      await api.post('users', data);
      console.log('Usuário cadastrado com sucesso');

      setForm(null);
      setOpen(false);
    } catch (error) {

      console.log('Não foi possível cadastrar esse usuário');

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

      setUser(response.data.user);
    } catch (error) {
      console.log(error);
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

      setUser(null);
      setForm(null);
      setOpen(false);
      localStorage.clear();

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitFunctionLogout = () => {
    localStorage.clear();
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
