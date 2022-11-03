import styled from "styled-components";


export const PostContainer = styled.article`
width: 26rem;
height: 16.25rem;
background-color: ${({theme}) => theme['gray-700']};
border-radius: 10px;
margin-top: 3rem;
padding: 2rem;
border: 2px solid ${({theme}) => theme['gray-700']};
border-radius: 10px;
transition: border 0.8s;
cursor: pointer;

&:hover{
    border: 2px solid ${({theme}) => theme['gray-500']};
}

p{
    margin-top: 1.25rem;
    color: ${({theme}) => theme['gray-300']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
`

export const HeaderPost = styled.header`
display: flex;
gap: 1rem;
strong{
    flex: 1;
    font-size: 1.25rem;
    color: ${({theme}) => theme['gray-100']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

span{
    max-width: max-content;
    font-size: 0.875rem;
    color: ${({theme}) => theme['gray-400']}
}
`