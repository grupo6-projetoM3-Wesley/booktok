import React, {useContext} from 'react'
import { StyledUpdateAcount } from './updateAcount'
import { UserContext } from '../../contextAPI/UserContext'
import { UpdateForm } from '../Form/updateUser'


const ButtonUpdateAcount = () => {
  const { setOpen, setForm } = useContext(UserContext)
  function handleClickUser(form: React.ReactNode) {
    setForm(form)
    setOpen(true);
  }
  return (
    <StyledUpdateAcount onClick={()=>{handleClickUser(<UpdateForm/>)}}>Atualizar informacoes</StyledUpdateAcount>
  )
}

export default ButtonUpdateAcount