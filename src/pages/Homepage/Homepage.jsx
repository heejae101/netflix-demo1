import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlider from './components/PopularMovieslide/PopularMovieSlider'

// 1.배너 => popular 영화 들고오기
// 2.popular movie
// 3.top rated movie
// 4.upcoming
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlider/>
    </div>
  )
}

export default Homepage