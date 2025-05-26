import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { APIKey, imageURL } from '../../Constants/Constants'
import './Posters.css'
import YouTube from 'react-youtube';

function Posters(props) {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


const handleMovies = (id) => {
  axios.get(`/movie/${id}/videos?api_key=${APIKey}&language=en-US`).then((response) => {
    if (response.data.results.length !== 0) {
      const trailer = response.data.results.find(
        video => video.site === "YouTube" && video.type === "Trailer"
      );
      if (trailer) {
        setUrlId(trailer); 
      } else {
        console.log("No YouTube trailer found.");
      }
    } else {
      console.log("Trailer not available");
    }
  });
};


  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
  })
  }, [])
  

  return (
    <div className='posters'>
        <h2>{props.title}</h2>
        <div className="cards">
          {
            movies.map((obj) => 
              <img onClick={() => {
                handleMovies(obj.id)
              }} className={props.isSmall ? 'small-cards' : 'card'} alt="cards"  src={`${imageURL + obj.backdrop_path}`} />
            )
          }
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default Posters