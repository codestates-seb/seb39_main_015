import styled from 'styled-components';
import emoji from 'node-emoji';
import { SectionsContainer, Section } from 'react-fullpage';
import { TypeAnimation } from 'react-type-animation';
import { Welcome } from '../images/Welcome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OrangeButton } from '../styled/Style';

const Body = styled.div`
  height: 100vh;
`;
const Column1 = styled.section`
  padding-top: 220px;
  padding-left: 200px;
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
  right: 200px;
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
          <Column2>소개 페이지</Column2>
        </Section>
        <Section>
          <Column3>테마 및 기능 설명</Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}
