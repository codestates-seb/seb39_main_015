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
import introVideo from '../images/video/introVideo.gif';
import aboutOneVideo from '../images/video/aboutOneVideo.gif';
import aboutTwoVideo from '../images/video/aboutTwoVideo.gif';
import aboutThreeVideo from '../images/video/aboutThreeVideo.gif';
import section3Image from '../images/section3.png';
import { useNavigate } from 'react-router-dom';

const BackDropFilter = styled.div`
  position: fixed;
  top: 0;
  height: 68px;
  left: 0;
  right: 0;
  backdrop-filter: blur(6px);
  z-index: 10;
`;

const Body = styled.div`
  height: 100vh;
`;
const Column1 = styled.section`
  padding-top: 25vh;
  padding-left: 140px;
  height: 100%;
  background-color: #fff9f1;
  font-size: 1.5rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding-left: calc(6% + 20px);
  }

  @media screen and (max-width: 768px) {
    padding-top: 16vh;
  }

  @media screen and (max-width: 480px) {
    padding-left: calc(6% + 10px);
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
    margin-top: 30px;
  }
  > p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 10px;
    line-height: 1.5;
    width: 40%;
  }
  > div {
    display: flex;
    padding: 30px 0px 15px 0px;
    > div {
      font-size: 24px;
      line-height: 1.5;
      font-weight: 700;
      margin-bottom: 10px;
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

  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 50px;
    }
    > p {
      width: 38vw;
      word-break: keep-all;
      font-size: 16px;
    }

    > div {
      > div {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      white-space: normal;
      font-size: 45px;
    }
    > p {
      width: 100%;
      word-break: keep-all;
      font-size: 16px;
      padding-bottom: 10px;
    }

    > div {
      padding: 20px 0px 10px 0px;
      > div {
        font-size: 22px;
      }
    }
    button {
      margin-left: 28%;
    }
  }

  @media screen and (max-width: 480px) {
    > p {
      font-size: 12px;
      padding-bottom: 5px;
    }

    > div {
      padding: 10px 0px 10px 0px;
      > div {
        font-size: 18px;
      }
    }
    button {
      margin-left: 20%;
      margin-top: 16px;
    }
  }
`;

const VideoSection = styled.div`
  width: 41vw;
  height: 56vh;
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translate(0%, -50%);
  border-radius: 14px;
  box-shadow: 11px 11px 0 0 rgba(255, 135, 83, 0.7);
  background: #d9d9d9 no-repeat center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  overflow: hidden;

  &.left {
    right: auto;
  }

  &.left.need-border {
    border: 1px solid rgba(255, 135, 83, 0.7);
  }

  &.pos-right {
    background-position: right;
  }

  &.main-video {
    .msg {
      display: inline-block;
      background-color: var(--point-color);
      padding: 0 18px;
      line-height: 2.8;
      white-space: nowrap;
      font-weight: 500;
      color: #fff;
      border-radius: 100px;
      position: absolute;
      top: calc(50% - 70px);
      left: 50%;
      transform: translate(-50%, -50%);

      animation: bounce 0.3s ease-in infinite alternate;

      &::before {
        content: '';
        position: absolute;
        border: 10px solid transparent;
        border-left-width: 7px;
        border-right-width: 7px;
        border-top-color: var(--point-color);
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 96%);
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0);
      transition: all 0.2s;
    }

    &:hover::before {
      background-color: rgba(0, 0, 0, 0.4);
    }
    & > button {
      width: 150px;
      height: 48px;
      position: absolute;
      border-radius: 9999px;
      border: 1px solid rgba(25, 25, 25, 0.9);
      background-color: #fff;
      font-size: 16px;
      font-weight: 500;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
          0px 6px 16px rgb(0 0 0 / 12%);
        transform: translate(-50%, -50%) scale(1.02);
      }
    }

    .msg,
    button {
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &:hover {
      & .msg {
        visibility: visible;
        opacity: 1;
      }
      & > button {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @keyframes bounce {
    from {
      transform: translate(-50%, -50%);
    }
    to {
      transform: translate(-50%, -40%);
    }
  }

  @media screen and (max-width: 1024px) {
    right: 6%;
  }

  @media screen and (max-width: 768px) {
    transform: none;
    height: 32vh;
    width: 81vw;
    top: 120px;
    left: auto;
    right: auto;

    &.main-video {
      top: auto;
      left: auto;
      right: auto;
      bottom: 30px;
    }
  }
`;
const SectionMsg = styled.div`
  position: absolute;
  top: 38%;
  margin-left: 4vw;
  width: 38vw;
  > div {
    word-break: keep-all;
    line-height: 1.5;
    font-size: 20px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    margin-bottom: 10px;

    > svg {
      color: #ff8753;
    }
  }
  > p {
    padding-left: 35px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    line-height: 1.8;
  }

  &.right {
    left: 50%;
  }

  @media screen and (max-width: 768px) {
    top: 60%;
    width: 80%;
    margin: 0;
    text-align: center;

    > div {
      font-size: 18px;
      line-height: 1.4;
    }
    > p {
      padding-left: 20px;
      font-size: 14px;
    }

    &.right {
      left: auto;
    }
  }
`;

const ColumnAbout = styled.section`
  padding-top: 200px;
  padding-left: 100px;
  height: 100%;
  background-color: #fff9f1;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  font-size: 1.5rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding-left: 6%;
  }

  @media screen and (max-width: 768px) {
    padding-left: calc(6% + 20px);
  }

  @media screen and (max-width: 480px) {
    padding-left: calc(6% + 10px);
  }
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
    font-size: 26px;
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
    word-break: keep-all;
    text-align: center;
    font-size: 30px;
    line-height: 1.5;
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
    anchors: ['intro', 'aboutOne', 'aboutTwo', 'aboutThree', 'footer'],
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
  const navigate = useNavigate();

  return (
    <>
      <BackDropFilter />
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
                  {emoji.get('writing_hand')} 특별한 날을 정하고 소중한
                  사람들에게 메시지를 남기세요.
                </p>
                <p>
                  {emoji.get('love_letter')} D-Day에 공개되는 메세지들로 추억이
                  더 특별해질 거예요!
                </p>
                <OrangeButton
                  width="198px"
                  height="48px"
                  onClick={() => window.location.replace('/myroom')}
                >
                  나의 룸 보기
                </OrangeButton>
              </Left>
              <VideoSection background={introVideo} className="main-video">
                <span className="msg">
                  {emoji.get('sparkles')} 오픈된 룸을 구경해보세요!{' '}
                  {emoji.get('sparkles')}
                </span>
                <button onClick={() => navigate('/rooms/sample')}>
                  룸 구경하기
                </button>
              </VideoSection>
            </Column1>
          </Section>
          <Section>
            <ColumnAbout>
              <VideoSection
                background={aboutOneVideo}
                className="left need-border"
              />
              <SectionMsg className="right">
                <div>
                  <FontAwesomeIcon icon={faHouseChimney} size="lg" />
                  <Space space="10px" />
                  {'추억을 남길 루빗 룸을 만들어 보세요.'}
                </div>
                <p>원하는 테마를 선택해 룸을 생성할 수 있습니다.</p>
                <p>D-Day는 30일 이내여야 합니다.</p>
                <p>30일이 넘는다면 조금만 기다려주세요.</p>
              </SectionMsg>
            </ColumnAbout>
          </Section>
          <Section>
            <ColumnAbout>
              <SectionMsg>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Space space="10px" />
                  {`루빗 골라 메시지를 작성해보세요!`}
                </div>
                <p>원하는 루빗 종류 및 포즈를 선택할 수 있습니다.</p>
                <p>140자로 추억을 기록해보세요.</p>
              </SectionMsg>
              <VideoSection background={aboutTwoVideo} />
            </ColumnAbout>
          </Section>
          <Section>
            <ColumnAbout>
              <VideoSection
                background={aboutThreeVideo}
                className="left pos-right need-border"
              />
              <SectionMsg className="right">
                <div>
                  <FontAwesomeIcon icon={faHouseChimney} size="lg" />
                  <Space space="10px" />
                  {'D-Day 에 모인 메시지를 확인해보세요!'}
                </div>
                <p>내용, 작성자, 받는이로 메시지를 검색해보세요.</p>
                <p>메시지는 각 층별로 모아볼 수 있습니다.</p>
              </SectionMsg>
            </ColumnAbout>
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
    </>
  );
}
