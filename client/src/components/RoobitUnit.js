import styled from 'styled-components';
import { getRoobitType } from '../hook/getRoobitType';
import RoobitOneImg from '../styled/RoobitOneImg.js';
import { haveTo } from '../hook/haveTo';

const RoobitUnitBox = styled.div`
  display: flex;
`;
const RoobitOneWrapper = styled.div`
  min-width: 80px;
  height: 80px;
`;
const RoobitBody = styled.div``;
const RoobitMsgFrom = styled.div``;
const RoobitMsgContent = styled.div``;
const RoobitMsgTo = styled.div``;

export const RoobitUnit = ({ unit }) => {
  const toConverter = (to) => {
    if (to === 'to everyone') {
      return 'to. everyone';
    } else {
      return `to. ${to}`;
    }
  };
  return (
    <RoobitUnitBox>
      <RoobitOneWrapper>
        <RoobitOneImg
          roobitCode={getRoobitType(unit.style)}
          className={haveTo(unit.reception) ? 'letter' : ''}
        />
      </RoobitOneWrapper>
      <RoobitBody>
        <RoobitMsgFrom>{`From. ${unit.nickname}`}</RoobitMsgFrom>
        <RoobitMsgContent>{unit.body}</RoobitMsgContent>
        <RoobitMsgTo>{toConverter(unit.reception)}</RoobitMsgTo>
      </RoobitBody>
    </RoobitUnitBox>
  );
};
