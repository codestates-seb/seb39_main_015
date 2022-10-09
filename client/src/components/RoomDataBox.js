import styled from 'styled-components';

const RoomDataBoxStyle = styled.section`
  > div {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 20;
    padding: 10px;

    text-align: center;

    width: 300px;
    height: auto;
    background-color: #fff;

    border: 3px solid var(--point-color);

    border-radius: 8px;
    color: var(--black-font-color);

    box-shadow: 0 4px 10px rgba(10, 10, 10, 0.25);
  }
  /* .zoom-in-mode {
    opacity: 0.6;
  } */

  h1 {
    font-size: 1.3rem;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .rest {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 10px;
  }

  .dday {
    font-size: 14px;
    color: var(--black-font-color);
  }
`;

const RoomDataBox = ({ roomData, isZoomIn }) => {
  const getDdayMsg = () => {
    const [year, month, date] = roomData.dday.split('-');
    const msg = `${year}년 ${month}월 ${date}일`;
    return msg;
  };

  return (
    <RoomDataBoxStyle>
      <div className={isZoomIn ? `zoom-in-mode` : 'zoom-out-mode'}>
        <h1>{roomData.roomName}</h1>
        <p className="rest">
          D-{roomData.restDay === 0 ? 'Day' : roomData.restDay}
        </p>
        <p className="dday">{getDdayMsg()}</p>
      </div>
    </RoomDataBoxStyle>
  );
};

export default RoomDataBox;
