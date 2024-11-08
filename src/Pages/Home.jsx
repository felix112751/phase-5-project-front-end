import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import imageSlide from '../Components/data';
import "../Styles/Home.css";

const Home = () => {
  const [currentState, setCurrentState] = useState(0);

  // Bg image
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  };


  const goToNext = (index) => setCurrentState(index);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) => (prev === imageSlide.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentState]);

  
  const getSlideClass = () => {
    switch (currentState) {
      case 1: return 'description-slide1';
      case 2: return 'description-slide2';
      default: return 'description-default';
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div style={bgImageStyle}></div>
      <div className='dark-overlay'></div>

      <section>
        <div className={`description ${getSlideClass()}`}>
          <h1>{imageSlide[currentState].title}</h1>
          <p>{imageSlide[currentState].body}</p>
          <button
            className="slide-button"
            style={{
              backgroundColor: imageSlide[currentState].buttonColor,
              color: imageSlide[currentState].buttonColor === 'transparent' ? '#fff' : '#fff',
              border: imageSlide[currentState].buttonColor === 'transparent' ? '2px solid #fff' : 'none',
              position: 'absolute',
              top: imageSlide[currentState].buttonPosition.top,
              left: imageSlide[currentState].buttonPosition.left,
            }}
          >
            {imageSlide[currentState].buttonText}
          </button>
        </div>

        <div className='radio-input'>
          {imageSlide.map((_, index) => (
            <label key={index}>
              <input
                type="radio"
                className={`input ${['green', 'yellow', 'red'][index % 3]}`}
                checked={currentState === index}
                onChange={() => goToNext(index)}
              />
            </label>
          ))}
        </div>
      </section>

      <div className="content"></div>
    </div>
  );
};

export default Home;
