import React, { useEffect, useState } from 'react'
import './Banner.css'
import {APIKey, imageURL} from '../../Constants/Constants'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState([]);
  const [index, setIndex] =useState(0);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${APIKey}&language=en-US'`).then((response) => {
      setMovie(response.data.results)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % 20);
    }, 5000);  
    return () => {
      clearInterval(interval);
    }
  }, []);
  
  const movies = movie[index];


  return (
    <div
    style={{backgroundImage: `url(${movies ? imageURL + movies.backdrop_path : " "})`}}
    className='banner'>
        <div className="content">
            <h1 className="title">{movies ? movies.title || movies.name: " "}</h1>
            <div className="buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h4 className='description'>{movies ? movies.overview : " "}</h4>
        </div>
        <div className="faded_bottom"></div>
    </div>
  )
}

export default Banner