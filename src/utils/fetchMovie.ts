"use client"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjY0NzlkMmIwODI3NGFkN2Y1NTQ0OWMzM2IwZjUyYSIsInN1YiI6IjY0ZDliNTJkZjQ5NWVlMDI5MzU1YzgzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G95BcEVFflJ7yrk6YtFvNSCBT_TNUzttGL7HYVJ7Y_M`
    }
  };
  
const base_url = "https://api.themoviedb.org/3/movie/popular"

  export const fetchMovies = async()=>{
      
    try{
        const response = await fetch(base_url,options);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}