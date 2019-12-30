import React from 'react';
import axios from 'axios';
import View from './view';
import Loading from '../../components/loading';
import {useState, useFetch} from 'react-fetch-ssr';

function Home (){
  
  const [shows, set_shows] = useState([]);

  useFetch(async () => {
    
      const {data} = await axios({url: `https://api.tvmaze.com/shows?page=1`});
      set_shows(shows.concat(data.slice(-20)));
    
  },[]);


  if (shows.length === 0) return <Loading />
  return (<View shows={shows} />);
}

export default Home;