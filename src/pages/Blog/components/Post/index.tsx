import { useNavigate } from "react-router-dom"
import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { HeaderPost, PostContainer } from "./styles"


interface PostProps {
    post: IPost;
}

export function Post({post}: PostProps){
    const formatedDate = relativeDateFormatter(post.created_at)

    const navigate = useNavigate();
    function goAhead(){
        navigate(`/post/${post.number}`)
    }
    return(
        <PostContainer onClick={goAhead}>
            <HeaderPost >
                <strong>{post.title}</strong>
                <span>{formatedDate}</span>
            </HeaderPost>
            <p>{post.body} </p>
        </PostContainer>
    )
}