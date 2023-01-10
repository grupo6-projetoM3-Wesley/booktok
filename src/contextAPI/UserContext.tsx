import { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';
import { AxiosError, AxiosResponse } from 'axios';

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
  passwordConfirm: string;
  address: string;
  avatar?: string;
  birthDay?: string;
  phone: string;
  isStore: boolean;
}

export interface iDataUpdateUser extends iDataRegisterUser {
  id: string;
}

interface iUser {
  id: string;
  avatar?: string;
  name: string;
  email: string;
  birthDay?: string;
  isStore: boolean;
  favorite?: iBook[];
}

export interface iBook {
  user: iUser,
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

interface iUserContextTypes {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;

  books: iBook[],
  stores: iBook[][];

  onSubmitFunctionLogin: (data: iDataLogin) => Promise<void>;
  onSubmitFunctionLogout: () => void;
  onSubmitFunctionRegister: (data: iDataRegisterUser) => Promise<void>;
  onSubmitFunctionUpdateUser: (data: iDataUpdateUser) => Promise<void>;
  onSubmitDeleteUser: (user: iUser) => Promise<void>;

  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: React.ReactNode | null;
  setForm: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const UserContext = createContext({} as iUserContextTypes);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [stores, setStores] = useState<iBook[][]>([]);
  const [books, setBooks] = useState<iBook[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [form, setForm] = useState<React.ReactNode | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await api.get<iBook[]>("books")
      setBooks(data);

      const groupUsersByID: iBook[][] = data.reduce((acc: any, obj: iBook) => {
        let key = `${obj.user.isStore ? "Store" : "User"}:${obj.user.id}`

        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {})
      const getStoreInGroup: iBook[][] = Object.entries(groupUsersByID).filter(item => item[0].startsWith("Store")).map(item => item[1]);

      setStores(getStoreInGroup);
    })()
  }, [])

  const onSubmitFunctionLogin = async (data: iDataLogin) => {
    try {
      const response = await api.post('/login', data)

      setUser(response.data.user)
      localStorage.setItem('tokenUser', response.data.accessToken);
      setOpen(false);

    } catch {
      console.log("Usuário e/ou senha inválido(s)");

    }
  };

  const onSubmitFunctionRegister = async (data: iDataRegisterUser) => {

    try {
      const response = await api.post("users", data)
      console.log(response);
      console.log("Usuário cadastrado com sucesso");
      setOpen(false);

    } catch (error) {
      console.log("Não foi possível cadastrar esse usuário");
    }
  };

  const onSubmitFunctionUpdateUser = async (data: iDataUpdateUser) => {
    api
      .patch(`/users/${data.id}`, data)
      .then((response) => {
        console.log(response);

        toast.success('Cadastro Atualizado com sucesso');

      })
      .catch((err) => {
        toast.error('Atualização não permitido');
        console.log(err);
      });
  };

  const onSubmitDeleteUser = async (user: iUser) => {
    api
      .delete(`/users/${user.id}`)
      .then((response) => {
        console.log(response);

        toast.success('Cadastro deletado com sucesso');
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch((err) => {
        toast.error('Não foi possivel deletar conta');
        console.log(err);
      });
  }

  const onSubmitFunctionLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        books,
        stores,
        isOpen,
        setOpen,
        form,
        setForm,
        onSubmitFunctionLogin,
        onSubmitFunctionLogout,
        onSubmitFunctionRegister,
        onSubmitFunctionUpdateUser,
        onSubmitDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

