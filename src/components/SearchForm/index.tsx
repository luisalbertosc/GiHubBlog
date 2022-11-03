import { useForm } from "react-hook-form";
import { SeachFormContainer } from "./styles"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
    query: z.string(),
  });
  
  type SearchFormInput = z.infer<typeof searchFormSchema>;
  
  interface SearchFormProps {
    postsLength: number;
    getPosts: (query?: string) => Promise<void>;
  }

export function SeachForm({ postsLength, getPosts }: SearchFormProps){
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
      });

      async function handleSearchPosts(data: SearchFormInput) {
        await getPosts(data.query);
      }
    
    return(
        <SeachFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <div>
                <strong>Publicações</strong>
                <span>{postsLength} publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
        </SeachFormContainer>
    )
}