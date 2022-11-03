import styled from "styled-components";


export const SeachFormContainer = styled.form`
display: flex;
flex-direction: column;
margin-top: 4.5rem;
div{
    display: flex;
    justify-content: space-between;

    strong{
        font-size: 1.125rem;
        color: ${({theme}) => theme['gray-200']}
    }

    span{
        font-size: 0.875rem;
        color: ${({theme}) => theme['gray-400']}
    }
}

input{
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    border: 1px solid ${({theme}) => theme['gray-600']};
    border-radius: 6px;
    background-color: ${({theme}) => theme['gray-1000']};
    margin-top: 0.75rem;

    &::placeholder{
        color: ${({theme}) => theme['gray-500']};
    }

    &:focus{
        border: 1px solid ${({theme}) => theme.blue};
    }
}
`