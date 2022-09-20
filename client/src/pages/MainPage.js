import styled from 'styled-components';
import emoji from 'node-emoji';
import { SectionsContainer, Section } from 'react-fullpage';
import { Link } from 'react-router-dom';

const Body = styled.div`
  height: 100vh;
`;
const Column1 = styled.section`
  padding-top: 80px;
  height: 100%;
  background-color: #fbfbfa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: relative;
  > h1 {
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 3rem;
  }
  > div {
    padding-bottom: 1rem;
  }
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

export default function MainPage() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };

  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1>
            <h1>Welcom to Roobits {emoji.get('smile')}</h1>
            <div>소중한 사람들과 추억을 남겨보세요!</div>
            <div>D-Day를 더 특별하게 만들어 드립니다.</div>
            <Link to="/myroom">
              <button>나의 룸 보기</button>
            </Link>
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
