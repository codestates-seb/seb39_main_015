import styled from 'styled-components';
import { getRoobitType } from '../hook/getRoobitType';
import RoobitOneImg from '../styled/RoobitOneImg.js';
import { haveTo } from '../hook/haveTo';

const RoobitUnitBox = styled.div`
  display: flex;
  margin: 3px 0px 3px 0px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 12px;
  position: relative;
`;
const RoobitOneWrapper = styled.div`
  min-width: 95px;
  height: 95px;
  background: #fbfbfa;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  margin-right: 21px;
`;
const RoobitBody = styled.div`
  width: 100%;
`;
const RoobitMsgFrom = styled.div`
  margin-bottom: 8px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
const RoobitMsgContent = styled.div`
  margin-bottom: 30px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;
const RoobitMsgTo = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: right;

  position: absolute;
  right: 12px;
  bottom: 12px;
`;

export const RoobitUnit = ({ unit }) => {
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
        <RoobitMsgTo>{`to. ${unit.reception}`}</RoobitMsgTo>
      </RoobitBody>
    </RoobitUnitBox>
  );
};
