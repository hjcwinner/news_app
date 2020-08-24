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
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  getmovies = async() => {
    this.callapi()
  }

  callapi = () => {
    return fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-24&sortBy=publishedAt&apiKey=51bb0125448e42c7b90700544eca7361")
    .then(data => data.json())
    .then(json => console.log(json.articles))
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
