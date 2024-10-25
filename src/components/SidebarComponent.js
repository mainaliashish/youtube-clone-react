import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if (!isMenuOpen) return null;
  return (
    <div className='col-span-1 px-3'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Vidoes</li>
        <li>Love</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Podcats</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Podcats</li>
      </ul>
    </div>
  )
}

export default SidebarComponent