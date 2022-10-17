import styled from 'styled-components';
import emoji from 'node-emoji';
import { SectionsContainer, Section } from 'react-fullpage';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faHouseChimney,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { OrangeButton } from '../styled/Style';
import mainAnimation from '../images/MainAnimation.gif';
import section2LAnimation from '../images/Section2L.gif';
import section2RAnimation from '../images/Section2R.gif';
// import RoobitOneImg from '../styled/RoobitOneImg.js';
// import { getRoobitType } from '../hook/getRoobitType';
import section3Image from '../images/section3.png';

const Body = styled.div`
  height: 100vh;
`;
const Column1 = styled.section`
  padding-top: 25vh;
  padding-left: 140px;
  height: 100%;
  background-color: #fff9f1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  font-size: 1.5rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding-left: calc(6% + 20px);
  }

  @media screen and (max-width: 768px) {
  }
`;
const Left = styled.div`
  h2 {
    white-space: pre;
    color: var(--black);
    font-size: 70px;
    & span {
      display: inline-block;
      margin-top: 20px;
      color: var(--point-color);
    }
  }

  button {
    margin-top: 25px;
  }
  > p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
  height: 300px;
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translate(0%, -50%);
  background-color: #d9d9d9;
  border-radius: 32px;
  box-shadow: 11px 11px 0 0 #ff8753;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const VideoSection2L = styled.div`
  width: 480px;
  height: 240px;
  position: absolute;
  top: 30%;
  left: 150px;
  transform: translate(0%, -50%);
  background-color: #d9d9d9;
  border-radius: 15px;
  box-shadow: 5px 5px 0 0 #ff8753;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const VideoSection2R = styled.div`
  width: 480px;
  height: 240px;
  position: absolute;
  top: 70%;
  right: 150px;
  transform: translate(0%, -50%);
  background-color: #d9d9d9;
  border-radius: 15px;
  box-shadow: 5px 5px 0 0 #ff8753;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Section2LMsg = styled.div`
  position: absolute;
  left: 700px;
  top: 20%;
  > div {
    line-height: 52px;
    font-size: 20px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    > svg {
      /* animation: blink 1.1s step-start 0s infinite; */
      color: #ff8753;
      /* @keyframes blink {
        50% {
          opacity: 0;
        }
      } */
    }
  }
  > p {
    padding-left: 35px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    line-height: 25px;
  }
`;
const Section2RMsg = styled.div`
  position: absolute;
  right: 700px;
  top: 65%;
  > div {
    line-height: 52px;
    font-size: 20px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    > svg {
      /* animation: blink 1.1s step-start 0s infinite; */
      color: #ff8753;
      /* @keyframes blink {
        50% {
          opacity: 0;
        }
      } */
    }
  }
  > p {
    padding-left: 35px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    line-height: 25px;
  }
`;

const Column2 = styled.section`
  padding-top: 200px;
  padding-left: 100px;
  height: 100%;
  background-color: #fff9f1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  font-size: 1.5rem;
  position: relative;
`;

const Column3 = styled.section`
  position: relative;
  padding-top: 150px;
  height: 100%;
  background-color: #fff9f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  > p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-bottom: 40px;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 240px;
  width: 100%;

  /* border: 1px solid #dcdcdc; */
  background-color: #ff8753;
  color: #fff;

  section {
    margin-left: 140px;
    margin-top: 50px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  h4 {
    font-family: 'Margarine', cursive;
    font-size: 30px;
    margin-bottom: 16px;
  }

  div {
    line-height: 1.8;
    font-size: 14px;
    span:not(.mail-ent-num) {
      margin: 0px 10px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  b {
    font-weight: 600;
    margin-right: 4px;
  }

  @media screen and (max-width: 1024px) {
    & section {
      margin-left: calc(6% + 40px);
    }
  }

  @media screen and (max-width: 768px) {
    & section {
      margin-top: 40px;
      margin-left: 10%;
    }
    & .ent-num {
      .bar {
        display: none;
      }
      .mail-ent-num {
        display: block;
      }
    }
  }

  @media screen and (max-width: 480px) {
    & section {
      margin-top: 30px;
    }

    & section span.bar {
      margin: 0 1px;
    }
  }
`;

const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;
const Section3Image = styled.div`
  position: absolute;
  bottom: 237px;
  width: 100%;
  height: 0;
  padding-top: 22%;
  background-image: url(${(props) => props.background});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Section3Text = styled.div`
  z-index: 10;
  > div {
    font-size: 30px;
    line-height: 52px;
    font-weight: 700;
    > svg {
      animation: blink 1.1s step-start 0s infinite;
      color: var(--point-color);
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
    }
  }
`;

export default function MainPage() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false,
  };
  const mainPageMsg = [
    `39기 데모데이까지 화이팅 🙌`,
    1000,
    'ACE팀 이번 대회 우승 기원 🔥🔥',
    1000,
    '미라클모닝 챌린지 힘들더라도 끝까지 🏃‍♂️',
    1000,
    '3-4 forever 동창회 무조건 오기!!!',
    1000,
  ];

  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1>
            <Left>
              <h2>
                Welcome to{`\n`}
                <span>Roobits!</span>
              </h2>
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
              <VideoSection background={mainAnimation} />
            </Right>
          </Column1>
        </Section>
        <Section>
          <Column2>
            <div>
              <Left>
                <VideoSection2L background={section2LAnimation} />
              </Left>
              <Section2LMsg>
                <div>
                  <FontAwesomeIcon icon={faHouseChimney} size="lg" />
                  <Space space="10px" />
                  {'추억을 남길 루빗 룸을 만들어 보세요.'}
                </div>
                <p>
                  D-Day는 30일 이내여야 합니다. 30일이 넘는다면 조금만
                  기다려주세요.
                </p>
                <p>원하는 테마를 선택해보세요.</p>
              </Section2LMsg>
            </div>
            <div>
              <Section2RMsg>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Space space="10px" />
                  {'원하는 모양의 루빗츠로 글을 작성할 수 있습니다.'}
                </div>
                <p>루빗 종류 및 포즈를 선택할 수 있습니다.</p>
                <p>140자로 추억을 기록해보세요.</p>
              </Section2RMsg>
              <Right>
                <VideoSection2R background={section2RAnimation} />
              </Right>
            </div>
          </Column2>
        </Section>
        <Section>
          <Column3>
            <Section3Text>
              <div>
                <FontAwesomeIcon icon={faAngleRight} size="lg" />
                <Space space="10px" />
                {'루비츠에서 추억을 남겨보세요!'}
              </div>
            </Section3Text>
            <Section3Image background={section3Image} />
            <Footer>
              <section>
                <h4>Roobits</h4>
                <div className="info">
                  <div>
                    <b>대표</b> 전광현<span className="bar"> | </span>이유진
                    <span className="bar"> | </span>조현화
                    <span className="bar"> | </span>염빛나리
                    <span className="bar"> | </span>유하경
                  </div>
                  <div className="ent-num">
                    <b>사업자 등록번호</b> 011-77-77777
                    <span className="bar"> | </span>
                    <span className="mail-ent-num">
                      <b>통신판매업 신고번호</b> 2022-서울광진-2022
                    </span>
                  </div>
                  <div>
                    <b>Tel</b> 02) 1234-5678 <span className="bar"> | </span>{' '}
                    서울 광진구 자양로 117
                  </div>
                  <div>&copy; 2022. Roobits, Inc. All rights reserved.</div>
                </div>
              </section>
            </Footer>
          </Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}
