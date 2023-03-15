import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
import {useState , useEffect} from 'react'

//57482cdf


const API_URL = "http://www.omdbapi.com?apikey=57482cdf";

const App = () => {

  const [movies,setMovies] = useState([])
  const [searchTerm , setSearchTerm] = useState("")

  const SearchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search) 
  }

  useEffect(()=> {
    SearchMovies('Batman')
  },[]) 

  return (
    <div className="app">
        <h1> Movie Land</h1>
        <div className='search'>
              <input
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
              />
              <img
              src = {SearchIcon}
              alt="search"
              onClick={() => {
                SearchMovies(searchTerm)
              }}
              />
        </div>

        {movies?.length > 0 
          ? (
            <div className='container'>
              {movies.map((movie)=> (
                  <MovieCard movie = {movie} />
                ))
              }
            </div>
            ): (
              <div className='empty'>
                <h3>No movies found</h3>
                </div>
          )
        }
    </div>
  );
}

export default App;
 