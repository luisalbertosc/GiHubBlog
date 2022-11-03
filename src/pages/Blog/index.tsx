import { useCallback, useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { SeachForm } from "../../components/SearchForm";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { PostList } from "./styles";

export interface IPost {
title: string;
body: string;
created_at: string;
number: number;
html_url: string;
comments: number;
user: {
login: string;
};
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Blog(){
    const [posts, setPosts] = useState<IPost[]>([]);
  
    const getPosts = useCallback(
      async (query: string = "") => {
    
          const response = await api.get(
            `/search/issues?q=${query}%20repo:${username}/${repoName}`
            );

          setPosts(response.data.items);
    
      },
      [posts]
    );
  
    useEffect(() => {
      getPosts();
    }, []);
  
    return(
        <main>
            <Profile/>
            <SeachForm
            postsLength={posts.length}
            getPosts={getPosts}
            />
            <PostList>
           {posts.map(post =>  
           <Post 
                key={post.number} 
                post={post}
           />
            )}
            </PostList>
        </main>
        
    )
}