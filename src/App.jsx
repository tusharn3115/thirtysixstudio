import React, { useEffect } from 'react';
import './index.css';
import Canvas from './Canvas';
import Data from './Data';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      {/* Page 1 */}
      <div className="relative w-full min-h-screen bg-white text-black">
        {/* Map through the first dataset and render canvases */}
        {Data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        
        {/* Navigation Bar */}
        <div className="relative z-10 min-h-screen overflow-hidden">
          <nav className="flex items-center justify-between w-[98%] h-16 mx-auto px-8 py-4 border-b border-gray-200">
            <div className="brand text-lg font-medium">Thirtysixstudio</div>
            <div className="flex gap-10 pr-36">
              {['What we do', 'Who we are', 'How we give back', 'Talk to us'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link}`}
                  className="hover:text-gray-400 transition duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Introduction Section */}
          <div className="textcontainer w-full px-[10%] ml-36 mt-8">
            <div className="text w-[35%]">
              <h3 className="text-4xl font-semibold">
                At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
              </h3>
              <p className="mt-10 w-[90%]">
                We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.
              </p>
              <p className="mt-10">Scroll</p>
            </div>
          </div>

          {/* Logo Section */}
          <div className="logo mt-16 px-1 py-3 border-b border-gray-200">
            <h1 className="text-[11.1rem] font-extrabold tracking-tight">
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="relative h-screen bg-white">
        {/* Map through the second dataset and render canvases */}
        {Data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}

        {/* Top Content Section */}
        <div className="topContent flex justify-evenly">
          <div className="left mt-24">
            <h3 className="font-medium text-xl">01 ─ WHAT WE DO</h3>
          </div>
          <div className="right mt-24 w-[23%]">
            <h1 className="font-medium text-3xl leading-snug">
              We aim to revolutionize digital production in the advertising space, bringing your ideas to life.
            </h1>
          </div>
        </div>

        {/* Detailed Text Section */}
        <div className="containText flex justify-end">
          <div className="text w-[27%] flex flex-col mt-40 gap-5 text-sm mr-[17rem]">
            <p>
              As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.
            </p>
            <p>
              Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
