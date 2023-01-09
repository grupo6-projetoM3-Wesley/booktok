import React, {useContext} from 'react'
import { StyledLogout } from './logout'
import { UserContext } from '../../contextAPI/UserContext'

const BtnLogout = () => {
  const {onSubmitFunctionLogout} = useContext(UserContext)

  return (
    <StyledLogout onClick={onSubmitFunctionLogout}>
        Logout
    </StyledLogout>
  )
}

export default BtnLogout