import React from 'react'
import ButtonListComponent from './ButtonListComponent'
import VideoContainerComponent from './VideoContainerComponent'

const MainContainerComponent = () => {
  return (
    <div className='col-span-11'>
      <ButtonListComponent/>
      <VideoContainerComponent/>
    </div>
  )
}

export default MainContainerComponent