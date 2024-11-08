import imageSlide from '../Components/data';
import { useEffect, useState } from 'react';
import "../Styles/Home.css"


const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  };

  const goToNext = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="home-container">
      <div style={bgImageStyle}></div>
      <div className='transparent-background'></div>
      
      <div className='description'>
        <div>
          <h1>{imageSlide[currentState].title}</h1>
          <p>{imageSlide[currentState].body}</p>
        </div>
        <div className='radio-input'>
          {imageSlide.map((slide, index) => (
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

      
      </div>
    </div>
  );
};

export default Home;
