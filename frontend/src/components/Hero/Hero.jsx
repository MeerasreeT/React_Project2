import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <p className="growth-line">Growth is Life</p>

          <div className = 'nav-divider'></div>

          <div className="hero-buttons-horizontal">
            <div className="hero-explorer">
              <p>about us</p>
              <img src={arrow_btn} alt='arrow' />
            </div>
            <div className="hero-explorer">
              <p>our  history</p>
              <img src={arrow_btn} alt='arrow' />
            </div>
          </div>
        </div>
      </div>

      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          {heroData.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot orange" : "hero-dot"}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
