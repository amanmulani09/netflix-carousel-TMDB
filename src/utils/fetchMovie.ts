"use client"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`
    }
  };
  
const base_url = "https://api.themoviedb.org/3/movie/popular"

    const fetchMovies = async()=>{
      
    try{
        const response = await fetch(base_url,options);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}