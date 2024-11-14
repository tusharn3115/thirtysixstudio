import React from 'react'
import "./index.css";
import Canvas from './Canvas';
import Data from './Data';

const App = () => {
  return (
    <>

    {/* Page 1 */}
      <div className='relative w-full min-h-screen'>
        {
          // data ik pura array hai or data[0] seh phele array milgya or fir phele array mai jitne objects hai wo sare mil gye or un sare objects ke liye ik ik canvas banrha hai

          Data[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))
        }
      </div>


      {/* Page 2 */}
      <div className='relative w-full min-h-screen'>
        {
          Data[1].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))
        }
      </div>


      {/* Page 3 */}
      <div className='relative w-full min-h-screen'>
        {
          Data[2].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))
        }
      </div>
    </>
  )
}

export default App