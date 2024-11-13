import React from 'react'
import { Outlet } from 'react-router'
import NavigationBar from '../component/NavigationBar'
const Root = () => {
  return (
    <div>
      <NavigationBar/>
      <main >

      <Outlet/>

      </main>

    </div>
  )
}

export default Root
