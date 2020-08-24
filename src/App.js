import React, { Component } from 'react'
import "./App.css"
import Movie from './Movie'

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
  }
]


export default class App extends Component {
  //상태선언, 함수, 라이프사이클 함수를 넣는공간
  
  render() {
    //상태값을 재선언 하는곳
    return (
      <div className="App">
        {movies.map(item => {
          return (
            <Movie title={item.title} poster={item.poster} /> 
            // <div>
            //   <h1>{item.title}</h1>
            //   <img src={item.poster} alt={item.title} />
            // </div>
            
          )})}
      </div>
    )
  }
}
