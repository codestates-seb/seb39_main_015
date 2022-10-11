import styled from 'styled-components';
import emoji from 'node-emoji';
import { SectionsContainer, Section } from 'react-fullpage';
import { TypeAnimation } from 'react-type-animation';
import { Welcome } from '../images/Welcome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OrangeButton } from '../styled/Style';
import mainAnimation from '../images/MainAnimation.gif';
import { ReactComponent as RoobitsText } from '../images/Roobits-text.svg';
// import RoobitOneImg from '../styled/RoobitOneImg.js';
// import { getRoobitType } from '../hook/getRoobitType';
import section3Image from '../images/MainPageSection3.png';

const Body = styled.div`
  height: 100vh;
`;
const Column1 = styled.section`
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
const Left = styled.div`
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

const Column2 = styled.section`
  padding-top: 80px;
  height: 100%;
  background-color: #fff9f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
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
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 250px;
  width: 100%;
  border: 1px solid #dcdcdc;
  background-color: #ff8753;
  color: white;
  section {
    margin-left: 200px;
    margin-top: 40px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  svg {
    margin-bottom: 20px;
  }
  p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 50px;
  }
  div {
    line-height: 30px;
    span {
      margin: 0px 10px 0px 10px;
      color: #dcdcdc;
    }
  }
`;

const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;
// const RoobitWrapper = styled.div`
//   display: flex;
//   height: 200px;
// `;
// const RoobitOneWrapper = styled.div`
//   min-width: 150px;
//   height: 150px;
//   /* background: #fbfbfa;
//   border: 1px solid #dcdcdc; */
//   /* border-radius: 8px; */
//   margin-right: 21px;
// `;
const Section3Image = styled.div`
  position: absolute;
  bottom: 250px;
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Section3Text = styled.div`
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
`;

export default function MainPage() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false,
  };
  const mainPageMsg = [
    `"39기 데모데이까지 화이팅 🙌"`,
    1000,
    '"ACE팀 이번 대회 우승 기원 🔥🔥"',
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
              <VideoSection background={mainAnimation} />
            </Right>
          </Column1>
        </Section>
        <Section>
          <Column2>소개페이지</Column2>
        </Section>
        <Section>
          <Column3>
            <Section3Text>
              <div>
                <FontAwesomeIcon icon={faAngleRight} size="lg" />
                <Space space="10px" />
                {'"루비츠에서 추억을 남겨보세요!"'}
              </div>
            </Section3Text>
            <Section3Image background={section3Image} />
            <Footer>
              <section>
                <RoobitsText />
                <div>
                  대표: 전광현<span> | </span>이유진<span> | </span>조현화
                  <span> | </span>염빛나리<span> | </span>유하경
                </div>
                <div>
                  사업자 등록번호: 011-77-77777<span> | </span>통신판매업
                  신고번호: 2022-서울광진-2022
                </div>
                <div>
                  Tel: 02)1234-5678 <span> | </span> 서울 광진구 자양로 117
                </div>
                <div>Copyright 2022. Roobits, Inc. All rights reserved</div>
                <div></div>
              </section>
            </Footer>
          </Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}
