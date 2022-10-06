import styled from 'styled-components';
import emoji from 'node-emoji';
import { SectionsContainer, Section } from 'react-fullpage';
import { TypeAnimation } from 'react-type-animation';
import { Welcome } from '../images/Welcome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OrangeButton, WhiteButtonOrangeBorder } from '../styled/Style';
import { ReactComponent as MakeRoom } from '../images/MakeRoom.svg';
import { ReactComponent as SelectRoobit } from '../images/SelectRoobit.svg';
import { ReactComponent as WriteMessage } from '../images/WriteMessage.svg';

const OrangeMsg = styled(WhiteButtonOrangeBorder)`
  border-radius: 34px;
  padding: 15px;
  margin: 30px 0px 30px 0px;
  cursor: default;
  :hover {
    box-shadow: none;
    transform: scale(1);
  }
`;

const Body = styled.div`
  height: 100vh;
`;
const Column1 = styled.section`
  padding-top: 220px;
  padding-left: 150px;
  height: 100%;
  background-color: #fbfbfa;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  font-size: 1.5rem;
  position: relative;
`;
const Left = styled.div`
  button {
    margin-top: 25px;
  }
  > p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
  }
  > div {
    display: flex;
    padding: 30px 0px 15px 0px;
    font-size: 30px;
    line-height: 52px;
    font-weight: 700;
    > div {
      font-size: 30px;
      line-height: 52px;
      font-weight: 700;
      > svg {
        animation: blink 1.1s step-start 0s infinite;
        color: #ff8753;
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      }
    }
  }
`;
const Right = styled.div``;
const VideoSection = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  right: 150px;
  transform: translate(0%, -50%);
  background-color: #d9d9d9;
  border-radius: 32px;
  box-shadow: 11px 11px 0 0 #ff8753;
`;

const Column2 = styled.section`
  padding-top: 80px;
  height: 100%;
  background-color: #fbfbfa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;
const Column3 = styled.section`
  padding-top: 80px;
  height: 100%;
  background-color: #fbfbfa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    max-height: 500px;
  }
  p {
    width: 365px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export default function MainPage() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false,
  };
  const mainPageMsg = [
    `"39기 얼마 안 남았다!! 데모데이까지 화이팅 🙌"`,
    1000,
    '"ACE팀 이번 대회 우승 기원 🔥🔥🔥"',
    1000,
    '"미라클모닝 챌린지 힘들더라도 끝까지 🏃‍♂️"',
    1000,
    '"3-4 forever 동창회 무조건 오기!!!"',
    1000,
  ];

  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1>
            <Left>
              <Welcome />
              <div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} size="lg" />
                  <Space space="10px" />
                </div>
                <TypeAnimation
                  sequence={mainPageMsg}
                  wrapper="div"
                  speed={40}
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
              <p>
                {emoji.get('writing_hand')} 추억을 공유하는 사람들과 글을
                작성해보세요.
              </p>
              <p>{emoji.get('love_letter')} D-Day가 더 특별해집니다!</p>
              <OrangeButton
                width="198px"
                height="48px"
                onClick={() => window.location.replace('/myroom')}
              >
                나의 룸 보기
              </OrangeButton>
            </Left>
            <Right>
              <VideoSection></VideoSection>
            </Right>
          </Column1>
        </Section>
        <Section>
          <Column2>
            <PhotoWrapper>
              <MakeRoom />
              <OrangeMsg width="365px" height="60px">
                추억을 공유할 루빗 룸을 생성하세요
              </OrangeMsg>
              <p>
                D-Day는 30일 이내로 설정할 수 있습니다!
                <br />
                30일 보다 더 멀리 있다면 조금 기다렸다 만들어주세요
              </p>
            </PhotoWrapper>
            <PhotoWrapper>
              <SelectRoobit />
              <OrangeMsg width="365px" height="60px">
                원하는 루빗을 선택하세요
              </OrangeMsg>
              <p>다양한 색상과 포즈를 선택할 수 있습니다.</p>
              <p>다른 테마에서는 어떤 모양의 루빗이 있을까요?</p>
            </PhotoWrapper>
            <PhotoWrapper>
              <WriteMessage />
              <OrangeMsg width="365px" height="60px">
                메세지를 남기고 디데이를 기다려주세요!
              </OrangeMsg>
              <p>
                특정 누군가를 지칭해서 메세지를 작성할 수 있어요.
                <br />
                루빗에게 편지 심부름을 시켜볼까요?
              </p>
            </PhotoWrapper>
          </Column2>
        </Section>
        <Section>
          <Column3>테마 및 기능 설명</Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}
