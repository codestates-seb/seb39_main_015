import styled from 'styled-components';

const CarouselStyle = styled.div``;

const Card = ({ title, content }) => (
  <div>
    <div className="theme-thumbnail">
      <img src={content} alt="dummy" />
    </div>
    <p>{title}</p>
  </div>
);

const Carousel = () => {
  return (
    <CarouselStyle>
      <div aria-label="theme carousel">
        <Card title="제목" content="https://picsum.photos/id/7/200/200" />
      </div>
      <button type="button">{'<'}</button>
      <button type="button">{'>'}</button>
    </CarouselStyle>
  );
};

export default Carousel;
