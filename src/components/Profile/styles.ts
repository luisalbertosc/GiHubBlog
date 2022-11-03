import styled from "styled-components";


export const ProfileContainer = styled.article`
display: flex;
justify-content: center;
gap: 2rem;
padding: 2rem 2.5rem;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
border-radius: 10px;
background-color: ${({theme}) => theme['gray-800']};
margin-top: -5rem;

>img{
    max-width: 9.25rem;
    border-radius: 8px;
}
`

export const ProfileInfo = styled.div`
header{
    display: flex;
    justify-content: space-between;
    color: ${({theme})=> theme['gray-100']};
    margin-bottom: 0.5rem;
    a{
        color: ${({theme}) => theme.blue};
        font-weight: 700;
        font-size: 0.75rem;
    }
    svg{
        margin-left: 0.5rem;
    }
}

span{
    color: ${({theme})=> theme['gray-100']};
}

ul{
    display: flex;
    margin-top: 1.5rem;
    gap:1.5rem;
  svg{
    margin-right: 0.5rem;
  }
}
`