import React from 'react';
import NavBar from './nav_bar.js';
import AboutMe from './about_me_page.js';
import NewPost from './new_post_page.js';
import PostPage from './post_page.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import HomePage from './homePage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='main-content'>
         <Routes>
            <Route path='/about_me_page' element={<AboutMe/>}/>
            <Route path='/new_post_page' element={<NewPost/>}/>
            <Route path='/post_page' element={<PostPage/>}/> 
            <Route path='/' element={<HomePage/>} />
          </Routes>
      </div>
   </div>
   </Router>
  );
}

export default App; 