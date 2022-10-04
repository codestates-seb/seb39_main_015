import styled from 'styled-components';
import { roomDetailData_12 } from '../data/DummyData';
import { useQueryClient } from 'react-query';
import { FormWrapper } from '../styled/Style';
import { useState } from 'react';
import { RoobitUnit } from './RoobitUnit';

const RoobitsListBody = styled.div``;

export const RoobitsList = () => {
  const queryClient = useQueryClient();
  const [selectedFloor, setSelectedFloor] = useState('all');

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
      <FormWrapper>
        <input />
      </FormWrapper>
      {Object.keys(floor).map((ele) => (
        <button key={ele} onClick={() => setSelectedFloor(ele)}>
          {ele}
        </button>
      ))}
      {floor[selectedFloor].map((unit) => {
        return roobits[unit].map((data) => (
          <RoobitUnit key={data.roobitId} unit={data} />
        ));
      })}
    </RoobitsListBody>
  );
};
