import React from 'react'
import SidebarComponent from './SidebarComponent';
import { Outlet } from 'react-router-dom';

function BodyComponent() {
  return (
    <div className='grid grid-flow-col'>
        <SidebarComponent/>
        <Outlet/>
    </div>
  )
}

export default BodyComponent;