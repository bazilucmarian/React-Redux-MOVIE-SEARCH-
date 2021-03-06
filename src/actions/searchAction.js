import {SEARCH_MOVIE, FETCH_MOVIES,FETCH_MOVIE,LOADING} from './types'

import axios from 'axios'

const APIkey='f776dc31';


export const SearchMovie=(text)=>{
    return (dispatch)=>{
        dispatch({
            type:SEARCH_MOVIE,
            payload:text
        })
    }

}

export const fetchMovies=text=>{
    return(dispatch)=>{
        axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${text}`)
        .then(response=>dispatch({
            type: FETCH_MOVIES,
            payload:response.data
        }))
        .catch(err=>console.log(err))

    }
}

export const fetchMovie=(id)=>{
    return(dispatch)=>{
        axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&i=${id}`)
        .then(response=>dispatch({
            type: FETCH_MOVIE,
            payload:response.data
        }))
        .catch(err=>console.log(err))
    
    }
}

export const setLoading=()=>{
    return{
        type:LOADING
    }
}
