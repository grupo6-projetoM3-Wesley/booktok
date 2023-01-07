import React from 'react'
import Logo from '../logo'
import { StyledHeader, StyledHeaderContainer } from './header'


const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <Logo />
                <div>
                    {children}
                </div>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}

export default Header