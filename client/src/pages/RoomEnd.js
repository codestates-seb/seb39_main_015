import logoImg from '../images/logo.svg';
import emoji from 'node-emoji';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RoomEndWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background);
  line-height: 1.6;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  section {
    text-align: center;
  }

  .first-msg {
    font-size: 18px;
    margin-bottom: 20px;
  }

  article {
    margin-bottom: 50px;
    h3 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 6px;
    }

    .dday {
      margin-bottom: 10px;

      & span:first-child {
        color: var(--point-color);
        font-weight: 500;
      }

      & span {
        display: block;
      }
    }
    .msg {
      /* white-space: pre; */
      font-size: 18px;
      line-height: 1.4;
      & span {
        color: var(--point-color);
        font-weight: 500;
        font-size: 28px;
      }
    }
  }

  .sub-msg {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.5);
    white-space: pre;
  }

  .logo {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;

    & img {
      width: 200px;
    }
  }

  .last-msg {
    color: var(--black-font-color);
    opacity: 0.6;
    white-space: pre;
    line-height: 2;
  }

  @media screen and (max-width: 480px) {
    article .msg {
      white-space: pre;
    }
  }
`;

const RoomEnd = ({ data }) => {
  const navigate = useNavigate();

  return (
    <RoomEndWrapper>
      <section>
        <h2>
          {data === undefined ? 'Room not found...' : 'Room is Closed...'}
        </h2>
        {data === undefined ? null : (
          <article>
            <h3>{`"${data.roomName}"`}</h3>
            <p className="dday">
              <span>D-Day</span>
              <span>{`${data.dday}`}</span>
            </p>
            <p className="msg">
              <span>{data.totalRoobitCount}</span>
              {` 개의 루빗츠가 작성되었고, \n`}
              <span>{data.viewCount}</span>
              {` 분이 찾아주셨습니다.`}
            </p>
          </article>
        )}

        <p className="sub-msg">
          {emoji.get('sparkles')}루빗츠와 함께 새로운 추억을 만들어보세요.
          {emoji.get('sparkles')}
          {`\n${emoji.get('point_down')}`}
        </p>
        <button className="logo" onClick={() => navigate('/')}>
          <img src={logoImg} alt="roobits" />
        </button>
        <p className="last-msg">
          Goobye, and See you later!{emoji.get('wave')}
          {`\n- Team Roobits -`}
        </p>
      </section>
    </RoomEndWrapper>
  );
};

export default RoomEnd;
