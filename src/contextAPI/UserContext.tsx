import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';
import { AxiosError } from 'axios';

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
  phone: string;
}

export interface iDataRegisterStore {
  email: string;
  password: string;
  name: string;
  passwordConfirm: string;
  address: string;
  phone: string;
  plan?: number;
}

interface iUser {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface iUserContextTypes {
  setUser: React.Dispatch<React.SetStateAction<iUser>>;
  user: iUser;
  loadingForm: boolean;

  onSubmitFunctionLogin: (data: iDataLogin) => Promise<void>;
  onSubmitFunctionRegister: (data: iDataRegisterUser) => void;
  onSubmitFunctionRegisterStore: (data: iDataRegisterUser) => void;
}

export const UserContext = createContext({} as iUserContextTypes);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState({} as iUser);
  const [loadingForm, setLoadingForm] = useState(false);

  const navigate = useNavigate();

  const onSubmitFunctionLogin = async (data: iDataLogin): Promise<void> => {
    setLoadingForm(true)
    try{
      const { data: responseData } = await api.post<iUser>("/login", data);

      localStorage.setItem('tokenUser', responseData.accessToken);

      navigate('/dashboard');

      toast.success('login com sucesso');
    }  catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);
    } finally {
      setLoadingForm(false);
    }
  };

  const onSubmitFunctionRegister = (data: iDataRegisterUser) => {
    api
      .post('/users', data)
      .then((response) => {
        console.log(response);

        toast.success('Cadastro realizado com sucesso');
        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch((err) => {
        toast.error('Cadastro não permitido');
        console.log(err);
      });
  };

  const onSubmitFunctionRegisterStore = (data: iDataRegisterStore) => {
    api
      .post('/users', data)
      .then((response) => {
        console.log(response);

        toast.success('Cadastro realizado com sucesso');
        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch((err) => {
        toast.error('Cadastro não permitido');
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        onSubmitFunctionRegisterStore,
        setUser,
        user,
        loadingForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
