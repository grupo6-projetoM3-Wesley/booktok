import React, { useContext, useState, useEffect } from 'react';
import { iDataLogin, UserContext } from '../../contextAPI/UserContext';
import { StyledHomeOff } from './style';
import logo from '../../assets/img/booktok.png';
import { Modal } from '../../components/Modal';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schemaLogin';
import { useNavigate } from 'react-router-dom';
import { StyledInput } from '../../styles/StyledInput';

export const HomeOffline = () => {
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  const { onSubmitFunctionLogin, loadingForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onsubmit: SubmitHandler<iDataLogin> = async (data) => {
    await onSubmitFunctionLogin(data);
  };

  return (
    <StyledHomeOff>
      <main>
        <header>
          <div className='headerContent'>
            <img className='imgLogo' src={logo} alt='booktok' />
            <div className='loginContent'>
              <div className='btnContent'>
                <button className='btnRegister'>Cadastro Loja</button>
                <button className='btnRegister'>Cadastro Usuário</button>
                <button className='btnLogin' onClick={toggleModal}>
                  Entrar
                </button>
              </div>
              <div className='search'>
                <label htmlFor=''>Pesquise o Título</label>
                <input type='text' />
              </div>
            </div>
          </div>
        </header>
      </main>

      <Modal title={'Login'} isOpen={isModalOpen} onClose={toggleModal}>
        <div>
          <form onSubmit={handleSubmit(onsubmit)}>
            <fieldset>
              <StyledInput
                placeholder='Email'
                type='email'
                id='email'
                register={register('email')}
              />

              <label htmlFor='email'>Email</label>

              {errors.email && <h2>{errors.email.message}</h2>}
            </fieldset>

            <fieldset>
              <StyledInput
                placeholder='Senha'
                type='password'
                id='password'
                register={register('password')}
              />

              <label htmlFor='password'>Digite sua senha</label>

              {errors.password && <h2>{errors.password.message}</h2>}
            </fieldset>

            <button type='submit'>
              {loadingForm ? 'carregando' : 'Logar'}
            </button>
          </form>
        </div>
      </Modal>
    </StyledHomeOff>
  );
};
