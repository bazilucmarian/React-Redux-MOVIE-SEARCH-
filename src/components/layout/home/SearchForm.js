import React, { Component } from 'react'
import {SearchMovie,fetchMovies,setLoading} from '../../../actions/searchAction'


import {connect} from 'react-redux'

class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

  onChangeHandle=(e)=>{
    this.props.SearchMovie(e.target.value)
}
onSubmit=(e)=>{
    e.preventDefault();
  this.props.fetchMovies(this.props.text);
    this.props.setLoading();
}


    render() {
   console.log(this.props)
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="diplay-4 mb-3">
                        <i className='fa fa-search'/>
                        Search for a movie, TV series...
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="Search Movies, TV series"
                        onChange={this.onChangeHandle}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    text: state.movies.text
})


export default connect(mapStateToProps, {SearchMovie, fetchMovies, setLoading})(SearchForm)
