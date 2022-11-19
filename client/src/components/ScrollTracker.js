import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollBackground = styled.div`
  position: relative;
  width: 454px;
  height: 5px;
  background: white;
  border-top-left-radius: 99px;
  border-top-right-radius: 99px;
  padding-top: 5px;
  z-index: 60;
  
  @media screen and (max-width: 590px) {
    width: 100%;
  }
`;

const ScrollTrackerBar = styled.div`
  position: absolute;
  width: ${(props) => props.ratio}%;
  height: 5px;
  background-color: #ff8753;
  border-top-left-radius: 99px;
  border-top-right-radius: 99px;
  border-bottom-right-radius: ${(props) =>
    props.ratio >= 99 ? 'none' : '99px'};
`;

export function ScrollTracker({ scrollRef }) {
  //   console.log(scrollRef.current);
  const pageHeight =
    scrollRef.current &&
    scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const s = scrollRef.current.scrollTop;
      setScrollY(s);
    };
    window.addEventListener('scroll', onScroll, true);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <ScrollBackground>
      <ScrollTrackerBar ratio={(scrollY / pageHeight) * 100} />
    </ScrollBackground>
  );
}
