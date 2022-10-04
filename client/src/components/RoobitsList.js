import styled from 'styled-components';
import { roomDetailData_12 } from '../data/DummyData';
import { useQueryClient } from 'react-query';
import { useState } from 'react';
import { RoobitUnit } from './RoobitUnit';
// import axios from 'axios';

const RoobitsListBody = styled.div`
  width: 590px;
  border: 1px solid;
`;
const SearchBarSection = styled.div``;
const FloorIndicator = styled.div``;
const RoobitUnitWrapper = styled.div``;

export const RoobitsList = () => {
  const queryClient = useQueryClient();
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');

  // API 연결 및 쿼리 정상 연결 되면 아래 코드 사용
  const { roobits } = queryClient.getQueryData('roobits') || roomDetailData_12;

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
      <SearchBarSection>
        <input
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
        />
      </SearchBarSection>
      <FloorIndicator>
        {Object.keys(floor).map((ele) => (
          <button key={ele} onClick={() => setSelectedFloor(ele)}>
            {ele}
          </button>
        ))}
      </FloorIndicator>
      <RoobitUnitWrapper>
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
