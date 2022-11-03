import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faCalendar, faComment, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { HeaderContainer, OpenPostContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "../Blog";
import { api } from "../../lib/axios";
import { relativeDateFormatter } from "../../utils/formatter";
import { PostContent } from "./components/PostContent";


const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function OpenPost() {
    const [openPostData, setOpenPostData] = useState<IPost>({} as IPost);

    const { id } = useParams();

    const getPostDetails = useCallback(async () => {
       
          const response = await api.get(
            `/repos/${username}/${repoName}/issues/${id}`
          );
    
          setOpenPostData(response.data);
       
        
      }, [openPostData]);
    
      useEffect(() => {
        getPostDetails();
      }, []);

    const navigate = useNavigate();
    function goBack(){
        navigate(-1)
    }

    const formattedDate = relativeDateFormatter(openPostData?.created_at);

    return (
        <OpenPostContainer>
            <HeaderContainer>
                <header>
                    <button onClick={goBack}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </button>
                    <a href={openPostData.html_url} target="_blank">
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                </header>
                <h1>{openPostData.title}</h1>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                       luisalbertosc
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendar} />
                        {formattedDate}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faComment} />
                        {openPostData.comments} comentário(s)
                    </li>
                </ul>

                
            </HeaderContainer>
            <PostContent content={openPostData.body} />
        </OpenPostContainer>
    )
}