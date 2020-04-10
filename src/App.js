import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/home/Landing'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom' 
import Movie from './components/layout/home/Movie'

import store from './store'


class App extends Component {
  render(){

  
  return (
    <Provider store={store}>
   <BrowserRouter>
    <Navbar/>
   <Route exact path="/" component={Landing} />
   <Route exact path="/movie/:id" component={Movie} />
    <Footer/>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;
