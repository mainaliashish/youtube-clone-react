import React from 'react'
import SidebarComponent from './SidebarComponent';
import MainContainerComponent from './MainContainerComponent';

function BodyComponent() {
  return (
    <div className='grid grid-flow-col'>
        <SidebarComponent/>
        <MainContainerComponent/>
    </div>
  )
}

export default BodyComponent;