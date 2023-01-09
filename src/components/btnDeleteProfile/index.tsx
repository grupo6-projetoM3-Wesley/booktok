import React, {useContext} from 'react'
import { StyledDelete } from './delete'
import { UserContext } from '../../contextAPI/UserContext'
import { DeleteUserForm } from '../Form/DeleteUser'

const DeleteButton = () => {
  const { setOpen, setForm } = useContext(UserContext)
  function handleClickUser(form: React.ReactNode) {
    setForm(form)
    setOpen(true);
  }
  return (
   <StyledDelete onClick={()=>{handleClickUser(<DeleteUserForm/>)}}>Deletar Conta</StyledDelete>
  )
}

export default DeleteButton