import React, {useContext} from 'react'
import { StyledRemoveBook } from './remove'
import { UserContext } from '../../contextAPI/UserContext'
import { RemoveFavForm } from '../Form/removeFav'

const ButtonRemove = () => {
  const { setOpen, setForm } = useContext(UserContext)
  function handleClickUser(form: React.ReactNode) {
    setForm(form)
    setOpen(true);
  }
  return (
    <StyledRemoveBook onClick={()=>{handleClickUser(<RemoveFavForm/>)}}>Remover livro</StyledRemoveBook>
  )
}

export default ButtonRemove