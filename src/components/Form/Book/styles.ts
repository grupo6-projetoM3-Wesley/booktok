import styled from "styled-components";

export const Container = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    padding: 40px 120px;
    gap: 30px;

    & > h1 {
        font-size: 18px;
        color: #02C5B7;
    }
    
    & > p {
        font-size: 14px;
        color: #f18f18;
    }
`