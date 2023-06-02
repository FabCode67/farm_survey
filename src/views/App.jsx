import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import FARM from '../assets/FARM.jpg';
import AGR from '../assets/AGR.jpg';
import { useMediaQuery } from 'react-responsive';
import Card from '../components/Card';
function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [FARM, AGR];
  const words = ['HERE WE HAVE ALL THING YO MAY NEED', 'THE CHOIS IS YORS']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const isSmallScreen = useMediaQuery({ maxWidth: 460 });

  return (
    
    <>
    <Nav />
    <div className="h-screen">
      <div
        className="absolute inset-0 flex items-center justify-center "
        style={{ animation: 'fadeInOut 3s infinite' }}
      >
        <img
          src={images[imageIndex]}
          alt="Background Image"
          className="w-full h-[100%]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center flex-col text-6xl md:text-xl space-y-14">
        <h1 className='welcome break-words'>WELC0ME TO OR COMMUNITY</h1>
        <h1
          className="text-2xl text-black md:text-xl"
          style={{ animation: 'slideIn 3s infinite' }}
        >
          {words[imageIndex]}
        </h1>
      </div>
    </div>
    <h1 className='center text-center items-center py-6 text-4xl'>WHAT DO YOU THINK</h1>
    <div className='related flex basis-full'>
      <div className='basis-[50%] bg-gray-500'>
        <h1 className='content'>COntetn to be here</h1>
        <p className='basis'>Content to be explained here</p>
        <p className='basis'>Content to be explained here</p>
        <p className='basis'>Content to be explained here</p>
        <p className='basis'>Content to be explained here</p>
        <p className='basis'>Content to be explained here</p>
        <p className='basis'>Content to be explained here</p>
      </div>
      <div className='basis-[50%] h-[30%] bg-red-900'>
        <img src={FARM} alt='images' className='h-72 w-full'></img>
      </div>
    </div>
    <h1 className='center text-center items-center py-6 text-4xl'>HERE IS ALL ABOUT OUR LATEST PRODUCTS</h1>
    <div
        className={`grid grid-cols-5 gap-4 sm:grid-cols-2 ${
          isSmallScreen ? 'md:grid-cols-1' : 'md:grid-cols-2'
        }`}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <h1 className='center text-center items-center py-6 text-4xl'>How do you feel</h1>

        <footer className='footer bg-green-500 mt-2'>
        <h1 className='center text-center items-center py-6 text-4xl'>FOOTER</h1>
       </footer>
    </>
  );
}

export default App;
