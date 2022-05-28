import React from 'react'
import Favorites from '../../components/Favorites/Favorites';
import  Search from '../../components/Search/Search';

const HomePage = () => {
  return (
    <div className='container'>
      <Search/>
      <Favorites />
    </div>
  )
}

export default HomePage;