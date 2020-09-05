import React, { Component } from 'react'
import "./App.css"
import Movie from './Movie'



export default class App extends Component {
  //상태선언, 함수, 라이프사이클 함수를 넣는공간
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {
    
  }


  // 라이프사이클 함수
  componentDidMount(){
    this.getmovies()
  }





  renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster_path} key={index} genres={movie.genre_ids} synopsis={movie.overview} />
    })
    return movies
  }

  getmovies = async() => {
    const results = await this.callapi()
    this.setState({
      movies: results
    })
  }

  callapi = () => {
    return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
    .then(data => data.json())
    .then(json => json.results)
    .catch(err => console.log(err))
  }



  render() {
    //상태값을 재선언 하는곳
    const { movies } = this.state
    return (
      <div className="App">
       {movies ? this.renderMovies() : 'Loading'}
      </div>
    )
  }
}
