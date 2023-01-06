import { createContext, ReactNode, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import  {api}  from '../services/api' 



interface iUserProviderProps{
    children: ReactNode,
}  

export interface iDataLogin{
    email: string ,
    password: string
}

export interface iDataRegisterUser{
    email: string,
    password: string,
    name: string,
    passwordConfirm: string
   
    
}

interface iUser{

    accessToken: string,
    user:{
        id: string,
        name: string,
        email: string
    }
}

interface iUserContextTypes{

   
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    user: iUser;

    onSubmitFunctionLogin: (data:iDataLogin)=> void;
    onSubmitFunctionRegister: (data:iDataRegisterUser)=> void;

}



export const UserContext = createContext({} as iUserContextTypes );

export const UserProvider = ({children}: iUserProviderProps) => {

    const [user, setUser] = useState({} as iUser)

    const navigate = useNavigate(); 

    const onSubmitFunctionLogin = (data: iDataLogin) => {
        
        api
        .post('/login', data)
        .then((response) => {
            
            console.log(response)

            setUser(response.data.user);
            localStorage.setItem('tokenUser' ,response.data.accessToken);
            toast.success('login com sucesso');
            // setTimeout(()=>{
            //     navigate('/);
            // },500)
            
        })
        .catch((err) => {
            console.log(err)
            toast.error('email ou senha incorreta');
        })
        
    };  

    const onSubmitFunctionRegister = (data: iDataRegisterUser) =>{
        
        api
        .post('/users', data)
        .then((response) => {
            
            console.log(response)
            
            toast.success('Cadastro realizado com sucesso');
            // setTimeout(()=>{
            //     navigate('/');
            // },500)
        })
        .catch((err) => {
           
            toast.error('Cadastro não permitido');
            console.log(err)
        })
    }; 

    return(

        <UserContext.Provider value={{onSubmitFunctionLogin, onSubmitFunctionRegister, setUser, user }}>
            {children}
        </UserContext.Provider>

    )

};