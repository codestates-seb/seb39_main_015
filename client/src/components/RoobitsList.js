import styled from 'styled-components';
import { roomDetailData_12 } from '../data/DummyData';
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
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const RoobitsListBody = styled.div`
  width: 590px;
  height: 100vh;
  border: 1px solid;
  padding-left: 67px;
  padding-right: 67px;
`;
const FloorIndicator = styled.div`
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
  flex-wrap: nowrap;
`;
const RoobitUnitWrapper = styled.div`
  border: solid 1px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 456px;
  height: 650px;
  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

export const RoobitsList = () => {
  const queryClient = useQueryClient();
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const ref = useRef(null);

  // API 연결 및 쿼리 정상 연결 되면 아래 코드 수정
  const { roobits } = queryClient.getQueryData('roobits') || roomDetailData_12;
  useEffect(() => {
    queryClient.invalidateQueries('roobits');
    ref.current.scrollTo(0, 0);
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
        <Input
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
      </InputWrapper>
      <FloorIndicator>
        {Object.keys(floor).map((ele) =>
          ele === selectedFloor ? (
            <OrangeButton
              width={'151px'}
              height={'36px'}
              key={ele}
              onClick={() => setSelectedFloor(ele)}
            >
              {ele === 'all' ? 'All' : ele}
            </OrangeButton>
          ) : (
            <WhiteButtonOrangeBorder
              width={'151px'}
              height={'36px'}
              key={ele}
              onClick={() => setSelectedFloor(ele)}
            >
              {ele === 'all' ? 'All' : ele}
            </WhiteButtonOrangeBorder>
          )
        )}
      </FloorIndicator>
      <RoobitUnitWrapper ref={ref}>
        {floor[selectedFloor].map((unit) => {
          return roobits[unit].map((data) => {
            // console.log(data.nickname.includes(searchKeyword));
            return data.nickname
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
              data.body.toLowerCase().includes(searchKeyword.toLowerCase()) ||
              data.reception
                .toLowerCase()
                .includes(searchKeyword.toLowerCase()) ? (
              <RoobitUnit key={data.roobitId} unit={data} />
            ) : (
              ''
            );
          });
        })}
      </RoobitUnitWrapper>
    </RoobitsListBody>
  );
};
