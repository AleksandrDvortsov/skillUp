import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import Favorite from '../pages/Favorite'
import Photos from '../pages/Photos'
import './style.scss'

let url = 'photos';

function App() {
  
  const changePage = e => {
    url = e.target.innerHTML+'';
    e.preventDefault();
    console.log(e.target.innerHTML);
  }

  return (
    <div id="app">
      <Header changePage = {changePage} />
      {(url==='photos' && <Photos/>)}
      {(url==='favorit' && <Favorite/>)}
          
      <Footer />
    </div>
  )
}

export default App;
