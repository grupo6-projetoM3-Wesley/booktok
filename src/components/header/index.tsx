import React from 'react'
import Logo from '../logo'
import { StyledHeader, StyledHeaderContainer, StyledHeaderNav } from './header'
import BtnHome from '../btnHome'
import BtnLogout from '../btnLogout'

const Header = () => {
  return (
    <StyledHeader>
        <StyledHeaderContainer>
            <Logo/>
            <StyledHeaderNav>
                <BtnHome/>
                <BtnLogout/>
            </StyledHeaderNav>
        </StyledHeaderContainer>
    </StyledHeader>
    )
}

export default Header