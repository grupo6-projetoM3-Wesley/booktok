import { createContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';

interface iUserProviderProps {
  children: ReactNode;
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

interface iUserLoged{
  id: string;
  name: string;
  email: string;
}

interface iUser {
  accessToken: string;
  user: iUserLoged;
}

interface iUserContextTypes {
  // setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  user: iUser | null;

  onSubmitFunctionLogin: (data: iDataLogin) => void;
  onSubmitFunctionLogout: () => void;
  onSubmitFunctionRegister: (data: iDataRegisterUser) => void;
  onSubmitFunctionRegisterStore: (data: iDataRegisterUser) => void;
  onSubmitFunctionUpdateUser: (data: iDataRegisterUser, user: iUserLoged)=> void;
  onSubmitDeleteUser: (user: iUserLoged)=>void;

  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: React.ReactNode | null
  setForm: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const UserContext = createContext({} as iUserContextTypes);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [form, setForm] = useState<React.ReactNode | null>(null);

  const navigate = useNavigate();

  const onSubmitFunctionLogin = (data: iDataLogin) => {
    api
      .post('/login', data)
      .then((response) => {
        console.log(response);

        setUser(response.data.user);
        localStorage.setItem('tokenUser', response.data.accessToken);
        toast.success('login com sucesso');
        // setTimeout(()=>{
        //     navigate('/login');
        // },500)
      })
      .catch((err) => {
        console.log(err);
        toast.error('email ou senha incorreta');
      });
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

  const onSubmitFunctionUpdateUser = (data: iDataRegisterUser, user: iUserLoged) => {
    api
      .put(`/users/${user.id}`, data)
      .then((response) => {
        console.log(response);

        toast.success('Cadastro Atualizado com sucesso');
        
      })
      .catch((err) => {
        toast.error('Atualização não permitido');
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

  const onSubmitFunctionLogout = () => {
    localStorage.clear();
    setUser(null);
  }

  const onSubmitDeleteUser = (user: iUserLoged)=>{
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

  return (
    <UserContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionLogout,
        onSubmitFunctionRegister,
        onSubmitFunctionRegisterStore,
        onSubmitFunctionUpdateUser,
        onSubmitDeleteUser,
        // setUser,
        user,
        isOpen,
        setOpen,
        form,
        setForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
