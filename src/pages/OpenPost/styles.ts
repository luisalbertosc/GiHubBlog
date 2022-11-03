import styled from "styled-components";

export const OpenPostContainer = styled.article`
padding: 2rem 2.5rem;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
border-radius: 10px;
background-color: ${({theme}) => theme['gray-800']};
margin-top: -5rem;
`

export const HeaderContainer = styled.article`
header{
    display: flex;
    justify-content: space-between;

    a, button{
        color: ${({theme}) => theme.blue};
        font-weight: 700;
        font-size: 0.75rem;
    }

    button svg{
        margin-right: 0.5rem;
    }

    a svg{
        margin-left: 0.5rem;
    }
}

h1{
    color: ${({theme}) => theme['gray-100']};
    margin-top: 1.25rem;
}

ul{
    display: flex;
    margin-top: 1.5rem;
    gap:1.5rem;
    color: ${({theme}) => theme['gray-400']};
  svg{
    margin-right: 0.5rem;
  }
}
`

