
import React from 'react';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-5 right-5  text-white p-3 rounded-full shadow-lg bg-red-600 hover:bg-pink-600 transition"
    >
     <img src="upward-arrow.png" alt="" className='h-5' />
    </button>
  );
};

export default ScrollToTopButton;