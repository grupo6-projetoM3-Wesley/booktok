import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    padding: 20px;

    @media (max-width:900px){
        flex-direction: column;
        gap: 1rem;
    }
`
