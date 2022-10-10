import styled from 'styled-components';
import { roomDetailData_30 } from '../data/DummyData.js';
import { useQueryClient } from 'react-query';
import { useState, useEffect, useRef } from 'react';
import { RoobitUnit } from './RoobitUnit';
import { ScrollTracker } from './ScrollTracker';
import {
  LogoWrapper,
  Input,
  InputWrapper,
  WhiteButtonOrangeBorder,
  OrangeButton,
} from '../styled/Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';

const RoobitsListBody = styled.div`
  position: fixed;
  z-index: 300;
  right: 0;
  width: 590px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-right: none;
  box-shadow: -8px 0px 21px rgba(104, 104, 104, 0.09);
  border-radius: 14px 0px 0px 14px;
  > h2 {
    padding-top: 30px;
    margin-bottom: 17px;
    height: auto;
    width: auto;
  }

  .cancel {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  .search-box {
    padding-bottom: 10px;
  }
`;
const FloorIndicator = styled.div`
  height: 50px;
  width: 458px;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
  button {
    flex: 0 0 auto;
  }
`;
const RoobitUnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 456px;
  height: 70%;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 15px 21px 15px 21px;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;

const SearchInput = styled(Input)`
  padding-left: 120px;
`;
const SearchOption = styled.div`
  position: absolute;
  left: 35px;
  width: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  > button {
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: #9c9c9c;
    height: 100%;
    padding: 0px;
    cursor: pointer;
  }
`;
const DropDown = styled.span`
  position: absolute;
  top: 25px;
  left: -10px;
  background-color: #fbfbfb;
  border-radius: 8px;
  width: 80px;
  z-index: 70;
  opacity: 0.8;

  animation-name: fadein;
  animation-duration: 0.5s;
  animation-direction: alternate;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 0;
    }
  }

  > button {
    height: 35px;
    width: 80px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
const FloorOrangeButton = styled(OrangeButton)`
  :hover {
    box-shadow: none;
  }
`;
const FloorWhiteButton = styled(WhiteButtonOrangeBorder)`
  :hover {
    box-shadow: none;
  }
`;

export const RoobitsList = ({ handleOpenModal, roomId }) => {
  const queryClient = useQueryClient();
  const [selectedFloor, setSelectedFloor] = useState('0');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchOption, setSearchOption] = useState('내용');
  const [dropDown, setDropDown] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  // API 연결 및 쿼리 정상 연결 되면 아래 코드 수정
  const { roobits } =
    queryClient.getQueryData(['roobits', roomId]) || roomDetailData_30;
  let floor = { 0: [] };
  for (let r = 0; r < roobits.length; r++) {
    floor[0].push(r);
  }

  for (let i = 1; i <= Math.ceil(Object.keys(roobits).length / 3); i++) {
    if (floor[0][floor[0].length - 1] - 3 * (i - 1) >= 2) {
      floor[i] = [3 * (i - 1), 3 * (i - 1) + 1, 3 * (i - 1) + 2];
    } else if (floor[0][floor[0].length - 1] - (3 * (i - 1) + 1) === 1) {
      floor[i] = [3 * (i - 1), 3 * (i - 1) + 1];
    } else if (floor[0][floor[0].length - 1] - (3 * (i - 1) + 1) === 0) {
      floor[i] = [3 * (i - 1)];
    }
  }

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + horizontalRef.current.scrollLeft);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
    e;
  };
  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = horizontalRef.current;
      horizontalRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const onThrottleDragMove = throttle(onDragMove, 100);

  useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, [selectedFloor]);

  return (
    <RoobitsListBody onClick={(e) => e.stopPropagation()}>
      <CancelIcon className="cancel" stroke="#aaa" onClick={handleOpenModal} />
      <h2>Roobits list</h2>
      <InputWrapper className="search-box">
        <SearchInput
          type="search"
          id="search"
          name="search"
          value={searchKeyword}
          height={'45px'}
          width={'456px'}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="검색어를 입력하세요."
        />
        <LogoWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </LogoWrapper>
        <SearchOption>
          <button onClick={() => setDropDown(!dropDown)}>
            {`${searchOption}`}
            <Space space={'4px'} />
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <DropDown hidden={!dropDown}>
            <button
              onClick={() => {
                setSearchOption('작성자');
                setDropDown(!dropDown);
              }}
            >
              작성자 검색
            </button>
            <button
              onClick={() => {
                setSearchOption('내용');
                setDropDown(!dropDown);
              }}
            >
              내용 검색
            </button>
            <button
              onClick={() => {
                setSearchOption('받는이');
                setDropDown(!dropDown);
              }}
            >
              받는이 검색
            </button>
          </DropDown>
        </SearchOption>
      </InputWrapper>
      <FloorIndicator
        ref={horizontalRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {Object.keys(floor).map((ele) =>
          ele === selectedFloor ? (
            <>
              <FloorOrangeButton
                width={'66px'}
                height={'36px'}
                key={ele}
                onClick={() => setSelectedFloor(ele)}
              >
                {ele === '0' ? 'All' : `${ele}F`}
              </FloorOrangeButton>
              <Space space={'8px'} />
            </>
          ) : (
            <>
              <FloorWhiteButton
                width={'51px'}
                height={'36px'}
                key={ele}
                onClick={() => setSelectedFloor(ele)}
              >
                {ele === '0' ? 'All' : `${ele}F`}
              </FloorWhiteButton>
              <Space space={'8px'} />
            </>
          )
        )}
      </FloorIndicator>
      <ScrollTracker scrollRef={ref} />
      <RoobitUnitWrapper ref={ref}>
        {floor[selectedFloor].map((unit) => {
          return roobits[unit].map((data) => {
            // console.log(data.nickname.includes(searchKeyword));
            if (
              searchOption === '내용' &&
              data.body.toLowerCase().includes(searchKeyword.toLowerCase())
            ) {
              return <RoobitUnit key={data.roobitId} unit={data} />;
            } else if (
              searchOption === '작성자' &&
              data.nickname.toLowerCase().includes(searchKeyword.toLowerCase())
            ) {
              return <RoobitUnit key={data.roobitId} unit={data} />;
            } else if (
              searchOption === '받는이' &&
              data.reception.toLowerCase().includes(searchKeyword.toLowerCase())
            ) {
              return <RoobitUnit key={data.roobitId} unit={data} />;
            }
          });
        })}
      </RoobitUnitWrapper>
    </RoobitsListBody>
  );
};
