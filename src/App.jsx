import React from 'react'
import "./index.css";
import Canvas from './Canvas';

const App = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-black text-white'>
        <Canvas />
      </div>
    </>
  )
}

export default App