"use client";
import { useEffect,useState } from "react";
import { fetchMovies } from "@/utils/fetchMovie";
import FilmCarousel from "./FilmCarasoul";
import Loader from "./Loader";
const Carasoul = ()=>{
const [movieData,setMovieData] = useState([]);
useEffect(()=>{

    const getMovies = async()=>{
        let data= await  fetchMovies();
        const requiredMoviesData = data?.results.slice(0,10);
        setMovieData(requiredMoviesData)
    }
        getMovies();
},[])
console.log(movieData)
if(movieData.length === 0) return <Loader />
    return(
        <>
        <FilmCarousel movies={movieData} />
        </>
    )
}

export default Carasoul

