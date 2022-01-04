import './App.css'; 
import React from 'react';
import Header from './containers/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RedditList from './containers/redditList/RedditList';
import RedditDetail from './containers/RedditDetail';
import Subreddits from './containers/subredditComponent/Subreddit';

function App() {
  return (
    <main>
      <section className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<RedditList/>} />
            <Route path='/r/' element={<Subreddits/>} />
            <Route>404 Not found!</Route>
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;