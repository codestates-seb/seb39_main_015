import styled from 'styled-components';
import DefaultSky from './DefaultSky';
import ReactRain from 'react-rain-animation';
import Snowfall from 'react-snowfall';
import cloudsImg from '../images/clouds_repeat.png';

// import all the styles
import 'react-rain-animation/lib/style.css';

const WeatherWrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const RainStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > div {
    height: 100%;
    & > div {
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3)
      );
      width: 4px;
    }
  }
`;

const Rain = () => {
  return (
    <RainStyle>
      <ReactRain numDrops="80" />
    </RainStyle>
  );
};

const Snow = () => {
  return <Snowfall color="white" snowflakeCount={200} />;
};

const CloudsStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @keyframes move-background {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(1000px, 0px, 0px);
    }
  }

  .clouds {
    width: 10000px;
    height: 100%;
    background: transparent url(${cloudsImg}) repeat;
    background-size: 1000px 450px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    animation: move-background 150s linear infinite;
    opacity: 0.6;
    mask-image: linear-gradient(
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0.6) 40%,
      transparent
    );
    mix-blend-mode: screen;
  }
  img {
    height: 70vh;
    width: 70vh;
    position: absolute;
    z-index: 3;
    right: 20px;
  }
`;

const Clouds = () => {
  return (
    <CloudsStyle>
      <div className="clouds"></div>
    </CloudsStyle>
  );
};

const WeatherStyle = ({ weather }) => {
  switch (weather) {
    case 'rain':
      return <Rain />;
    case 'snow':
      return <Snow />;
    case 'clouds':
      return <Clouds />;
    default:
      return;
  }
};

const Weather = ({ weather = 'clear' }) => {
  //weather: (rain, snow, clouds, clear), // 날씨 구현 안된거면 일단 clear

  return (
    <WeatherWrapper>
      <DefaultSky isClear={weather === 'clear'} />
      <WeatherStyle weather={weather} />
    </WeatherWrapper>
  );
};

export default Weather;
