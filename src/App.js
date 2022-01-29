import './App.css'; 
import React from 'react';
import Header from './containers/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Subreddits from './containers/subredditComponent/Subreddit';
import MainPage from './containers/mainPage/mainPage';



function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header/>
      </div>
      <div className='main'>
        <Subreddits />
        <MainPage/> 
      </div>       
    </div>
  );
}

export default App;