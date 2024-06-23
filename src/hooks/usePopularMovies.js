import { useQuery } from "@tanstack/react-query";
import api from "../utills/api"

const fetchPopularMovies =() =>{
    return api.get(`/movie/popular`)
}

// 컴포넌트를 비즈니스 로직과 ui를 분리해주는게 좋음
export const usePopularMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result)=>result.data,
    })
}
