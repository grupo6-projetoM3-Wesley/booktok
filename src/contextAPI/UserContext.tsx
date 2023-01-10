import { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
  passwordConfirm: string;
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
  bookFiltered: iBook[][];
  setBookFiltered: React.Dispatch<React.SetStateAction<iBook[][]>>;

  onSubmitFunctionLogin: (data: iDataLogin) => Promise<void>;
  onSubmitFunctionLogout: () => void;
  onSubmitFunctionRegister: (data: iDataRegisterUser) => Promise<void>;
  onSubmitFunctionUpdateUser: (data: iDataUpdateUser) => Promise<void>;
  onSubmitDeleteUser: () => Promise<void>;

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
  const [bookFiltered, setBookFiltered] = useState<iBook[][]>([]);

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
      }, {});

      const getStoreInGroup: iBook[][] = Object.entries(groupUsersByID).filter(item => item[0].startsWith("Store")).map(item => item[1]);

      setStores(getStoreInGroup);
      setBookFiltered(getStoreInGroup);
    })()
  }, [])

  const onSubmitFunctionLogin = async (data: iDataLogin) => {
    try {
      const response = await api.post('/login', data)

      setUser(response.data.user)

      localStorage.setItem('tokenUser', response.data.accessToken);
      setOpen(false);

    } catch (error) {
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
    try {
      const token = localStorage.getItem("tokenUser");


      const response = await api.patch("users/" + user?.id, {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setUser(response.data.user);

    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitDeleteUser = async () => {
    try {
      const token = localStorage.getItem("tokenUser");
      await api.delete("users/" + user?.id, {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setUser(null);
      setForm(null);
      setOpen(false);
      localStorage.clear();

      navigate("/");

    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitFunctionLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/")
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

