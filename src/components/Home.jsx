import React from 'react';
import heroImage from '../assets/heroImage.png';

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-signature">Aryan</h1>
          <h2 className="text-3xl font-medium">Full Stack Developer</h2>
        </div>
        <div className="flex justify-center items-center">
          <img src={heroImage} alt="hero" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
