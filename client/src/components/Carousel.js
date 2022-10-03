import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getRoobitType } from '../hook/getRoobitType';
import RoobitOneImg from '../styled/RoobitOneImg';
import thumbnailImg from '../images/thumbnail_01.png';

const CarouselStyle = styled.div`
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
    width: 180px;
    height: 180px;

    overflow: hidden;
  }

  .flexbox {
    display: flex;
  }

  .img {
    width: 180px;
    height: 180px;
    background-repeat: no-repeat;
    flex: none;

    padding: 15px;
  }

  .btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 3.3rem;
    color: gray;
    padding: 0 10px;
  }

  .position {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  .dot {
    background: lightgray;
    border-radius: 100%;
    height: 10px;
    width: 10px;
  }
  .dot + .dot {
    margin-left: 20px;
  }

  .current {
    background: gray;
  }

  .thumbnail {
    width: 100%;
    height: 100%;
    background-image: url(${thumbnailImg});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Carousel = ({ cards = [], setData, roobitType, roobitStyle }) => {
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
    <CarouselStyle>
      <div className="container">
        <div className="slide">
          <button
            type="button"
            className="btn"
            onClick={() => {
              moveSlide(-1);
            }}
          >
            &lt;
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
                  {img.type === 'theme' && <div className="thumbnail"></div>}
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
            &gt;
          </button>
        </div>
        {cards.length > 0 && cards[0].type === 'theme' && (
          <p>{images.current[current].title}</p>
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
