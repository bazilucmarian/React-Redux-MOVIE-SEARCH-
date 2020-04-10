import React, { Component } from 'react'
import SearchForm from './SearchForm'
import Spinner from '../Spinner'
import {connect} from 'react-redux'
import MoviesContainer from './MoviesContainer'

class Landing extends Component {
  

    render() {
      const {loading}= this.props;
        return (
            <div className="container">
                <SearchForm/>
                {
                    loading ?<Spinner/>:<MoviesContainer/>
                }

                
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    loading:state.movies.loading
})
export default connect(mapStateToProps, null)(Landing)
