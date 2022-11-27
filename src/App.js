import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
// import './App.css';
import Layout from './pages/Layout';
import Home from './components/Home';
import About from './components/About';
import Pokelist from './components/Pokelist';
import PokeSingle from './components/PokeSingle';


const RouterWrapper = (props) => {

const params = useParams();
return <PokeSingle params={params} {...props}/>

};

//workaround for router in class component, wrapping a function component around class comp

class App extends Component {



  render() {
    return (
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='pokelist' element={<Pokelist />} />
            <Route  path='pokelist/:pokesingle' element={<RouterWrapper />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>

      </BrowserRouter>
    );
  }
}

export default App;