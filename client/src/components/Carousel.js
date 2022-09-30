import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CarouselStyle = styled.div`
  div {
    transition: all 0.3s ease-out;
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
    width: 211px;
    height: 120px;

    overflow: hidden;
  }

  .flexbox {
    display: flex;
  }

  .img {
    width: 211px;
    height: 120px;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    flex: none;
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
`;

const Carousel = ({ cards, setRoomTheme }) => {
  const images = useRef(cards);

  const [current, setCurrent] = useState(0);
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
    if (
      cards.length > 0 &&
      cards[0].type === 'theme' &&
      images.current[current].number !== -1
    ) {
      setRoomTheme(images.current[current].roomTheme);
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
                <div
                  key={i}
                  className="img"
                  style={{ backgroundImage: `url(${img.src})` }}
                ></div>
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
        {cards.length > 0 && cards[0].title !== undefined ? (
          <p>{images.current[current].title}</p>
        ) : null}
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
