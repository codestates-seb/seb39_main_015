import styled from 'styled-components';
import DefaultSky from './DefaultSky';
import Rain from './Rain';

const WeatherWrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;

const SnowStyle = styled.div``;

const Snow = () => {
  return <SnowStyle></SnowStyle>;
};

const CloudsStyle = styled.div``;

const Clouds = () => {
  return <CloudsStyle></CloudsStyle>;
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
      <WeatherStyle weather={weather} />
      <DefaultSky />
    </WeatherWrapper>
  );
};

export default Weather;
