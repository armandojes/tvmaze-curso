import React from 'react';
import View from './view.jsx';
import Loading from '../../components/loading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useFetch} from 'react-fetch-ssr'

function Show(){

  const [info, set_info] = useState(null);
  const {id} = useParams();
  

  useFetch(async () => {
    const {data} = await axios({url: `https://api.tvmaze.com/shows/${id}`});
    set_info(data);
  },[]);

  
  if (!info) return (<Loading />);
  return (<View {...info} />)
}

export default Show;