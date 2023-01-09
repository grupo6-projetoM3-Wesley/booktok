import styled from "styled-components";

export const Container = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 40px 120px;
    gap: 30px;
    
    & > h1 {
        color: #02C5B7;
    }


    & > input {
        width: 100%;

        padding: 10px 15px;
        
        outline: none;

        border-radius: 15px;
        border: 1px solid #B48CF2;

        &::placeholder {
            color: #B48CF2;
        }
    }

    & > button {
        width: 100%;
        background-color: #02C5B7;

        padding: 10px 15px;
        border-radius: 15px;
        color: #fff;
    }
`

