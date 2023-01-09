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
        color:  #F51228;
    }

    & > h2 {
        color:#000000;
        font-size: 22px;
    }

    & > p {
        color:#000000;
        font-weight: 700;
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
        background-color: #F51228;

        padding: 10px 15px;
        border-radius: 15px;
        color: #fff;
        font-size: 18px;
        font-weight: 800;
    }
`

