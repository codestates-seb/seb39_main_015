import styled from 'styled-components';
import { roomDetailData_30 } from '../data/DummyData';
import { useQueryClient } from 'react-query';
import { useState, useEffect, useRef } from 'react';
import { RoobitUnit } from './RoobitUnit';
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

const RoobitsListBody = styled.div`
  width: 590px;
  height: 100vh;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FloorIndicator = styled.div`
  height: 40px;
  width: 456px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  margin-top: 20px;
  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
  -webkit-overflow-scrolling: touch;
  button {
    flex: 0 0 auto;
  }
`;
const RoobitUnitWrapper = styled.div`
  border: solid 1px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 456px;
  height: 650px;
`;
const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;

const SearchInput = styled(Input)`
  padding-left: 105px;
`;
const SearchOption = styled.span`
  position: absolute;
  left: 35px;
  width: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
  > button {
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: #9c9c9c;
    height: 16px;
    padding: 0px;
    cursor: pointer;
  }
`;
const DropDown = styled.span`
  position: absolute;
  top: 25px;
  left: -10px;
  background-color: #fbfbfb;
  width: 80px;
  z-index: 50;

  animation-name: fadein;
  animation-duration: 0.5s;
  animation-direction: alternate;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
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

export const RoobitsList = () => {
  const queryClient = useQueryClient();
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchOption, setSearchOption] = useState('내용');
  const [dropDown, setDropDown] = useState(false);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  // API 연결 및 쿼리 정상 연결 되면 아래 코드 수정
  const { roobits } = queryClient.getQueryData('roobits') || roomDetailData_30;
  useEffect(() => {
    queryClient.invalidateQueries('roobits');
    ref.current.scrollTo(0, 0);
    if (selectedFloor >= 7) {
      horizontalRef.current.scrollTo(208, 0);
    }
    if (selectedFloor <= 5) {
      horizontalRef.current.scrollTo(0, 0);
    }
  }, [selectedFloor]);

  let floor = { all: Object.keys(roobits) };
  for (let i = 1; i <= Math.ceil(Object.keys(roobits).length / 3); i++) {
    if (floor.all[floor.all.length - 1] - (3 * (i - 1) + 1) >= 2) {
      floor[i] = [3 * (i - 1) + 1, 3 * (i - 1) + 2, 3 * (i - 1) + 3];
    } else if (floor.all[floor.all.length - 1] - (3 * (i - 1) + 1) === 1) {
      floor[i] = [3 * (i - 1) + 1, 3 * (i - 1) + 2];
    } else if (floor.all[floor.all.length - 1] - (3 * (i - 1) + 1) === 0) {
      floor[i] = [3 * (i - 1) + 1];
    }
  }

  return (
    <RoobitsListBody>
      <InputWrapper>
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
          <DropDown hidden={dropDown}>
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
      <FloorIndicator ref={horizontalRef}>
        {Object.keys(floor).map((ele) =>
          ele === selectedFloor ? (
            <>
              <OrangeButton
                width={'66px'}
                height={'36px'}
                key={ele}
                onClick={() => setSelectedFloor(ele)}
              >
                {ele === 'all' ? 'All' : `${ele}F`}
              </OrangeButton>
              <Space space={'8px'} />
            </>
          ) : (
            <>
              <WhiteButtonOrangeBorder
                width={'51px'}
                height={'36px'}
                key={ele}
                onClick={() => setSelectedFloor(ele)}
              >
                {ele === 'all' ? 'All' : `${ele}F`}
              </WhiteButtonOrangeBorder>
              <Space space={'8px'} />
            </>
          )
        )}
      </FloorIndicator>
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
