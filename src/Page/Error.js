import React from 'react'
import NavigationBar from '../component/NavigationBar'

const Error = () => {
  return (
    <>
      <NavigationBar/>
      <main>
        <h1>An error occured</h1>
        <p>could not find this page!</p>
      </main>
    </>
  )
}

export default Error
