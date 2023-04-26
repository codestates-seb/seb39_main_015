import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getRoobitType } from '../hook/getRoobitType';
import RoobitOneImg from '../styled/RoobitOneImg';
import thumbnailImg from '../images/thumbnail_01.png';
import { ReactComponent as ArrowImg } from '../images/carouselArrow.svg';

const CarouselStyle = styled.div`
  --width: ${(props) => props.width || '210px'};
  --height: ${(props) => props.height || '120px'};

  div {
    transition: margin 0.3s ease-out;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slide {
    display: flex;
    align-items: center;
  }

  .window {
    background: #ccc;
    width: var(--width);
    height: var(--height);

    border-radius: 8px;
    overflow: hidden;
    outline: 1px solid var(--point-color);
  }

  .flexbox {
    display: flex;
  }

  .img {
    width: var(--width);
    height: var(--height);
    background-color: var(--background);
    background-repeat: no-repeat;
    flex: none;
  }

  .img.roobit {
    padding: 15px;
  }

  .btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 3.3rem;
    padding: 0 10px;
    background-color: transparent;
    border: none;
    height: 100px;
    padding-left: 30px;
    padding-right: 10px;

    &.left {
      padding-left: 10px;
      padding-right: 30px;
      & svg {
        transform: rotate(-180deg);
      }
    }

    & svg {
      fill: #dcdcdc;
    }
    &:hover svg {
      fill: var(--point-color);
    }
  }

  .position {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  .dot {
    background: lightgray;
    border-radius: 100%;
    height: 6px;
    width: 6px;
  }
  .dot + .dot {
    margin-left: 10px;
  }

  .current {
    background: var(--point-color);
  }

  .thumbnail {
    width: 100%;
    height: 100%;
    background-image: url(${thumbnailImg});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .thumbnail.comming-soon::after {
    content: '?';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--point-color);
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: calc(var(--height) / 1.4);
    font-family: 'Margarine', cursive;
  }

  .title {
    margin-top: 6px;
  }
`;

const Carousel = ({
  cards = [],
  setData,
  roobitType,
  roobitStyle,
  width,
  height,
}) => {
  const images = useRef(cards);
  const [current, setCurrent] = useState(() => {
    if (roobitType) return Number(roobitType) - 1;
    else return 0;
  });
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
    if (setData && cards.length > 0 && images.current[current].number !== -1) {
      setData(images.current[current].value);
    }
  }, [current]);

  return (
    <CarouselStyle width={width} height={height}>
      <div className="container">
        <div className="slide">
          <button
            type="button"
            className="btn left"
            onClick={() => {
              moveSlide(-1);
            }}
          >
            <ArrowImg />
          </button>
          <div className="window">
            <div className="flexbox" style={style}>
              {images.current.map((img, i) => (
                <div key={i} className={`img ${img.type}`}>
                  {img.type === 'roobit' && (
                    <RoobitOneImg
                      roobitCode={getRoobitType(i + 1 + roobitStyle)}
                    />
                  )}
                  {img.type === 'theme' && (
                    <div
                      className={`thumbnail ${
                        img.number === -1 && 'comming-soon'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => {
              moveSlide(1);
            }}
          >
            <ArrowImg />
          </button>
        </div>
        {cards.length > 0 && cards[0].type === 'theme' && (
          <p className="title">{images.current[current].title}</p>
        )}
        <div className="position">
          {images.current.map((x, i) => (
            <div
              key={x.number}
              className={i === current ? 'dot current' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
