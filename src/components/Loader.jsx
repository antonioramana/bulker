import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-t-4 border-blue-500 border-solid border-transparent rounded-full spinner w-full h-full"></div>
        <div className="absolute border-4 border-t-4 border-red-500 border-solid border-transparent rounded-full spinner w-1/2 h-1/2 top-1/4 left-1/4"></div>
      </div>
    </div>
  );
};

export default Loader;
