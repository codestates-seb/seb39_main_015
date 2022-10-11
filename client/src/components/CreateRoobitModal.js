import {
  ModalFormWrapper,
  ModalInput,
  InputWrapper,
  WhiteButton,
  OrangeButton,
} from '../styled/Style';
import Carousel from './Carousel';
import RoobitStyleSelect from './RoobitStyleSelect';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { useMemo, useState } from 'react';
import RoobitOneImg from '../styled/RoobitOneImg';
import { getRoobitType } from '../hook/getRoobitType';
import styled from 'styled-components';
import { haveTo } from '../hook/haveTo';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';
import roobitStyleChangeBtnImg from '../images/roobitStyleChangBtn.svg';
import speechBubble from '../images/speechBubble.svg';

const CreateRoobitModalStyle = styled(ModalFormWrapper)`
  text-align: center;
  .design-btn {
    width: 100px;
    height: 100px;
    border: 1px solid var(--point-color);
    border-radius: 8px;
    padding: 7px;
    position: relative;
    background-color: var(--background);
    margin-bottom: 30px;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      right: -19px;
      width: 38px;
      height: 38px;
      background-image: url(${roobitStyleChangeBtnImg});
    }
  }

  .two-divide {
    margin-top: 11px;
  }

  .letter-msg {
    display: none;
  }

  .letter-msg-parent {
    position: relative;

    & .letter-msg {
      display: block;
      color: #fff;
      font-size: 11px;
      white-space: pre;
      padding-top: 10px;
      line-height: 1.6;
      position: absolute;
      right: 0;
      top: 0;
      width: 113px;
      height: 80px;
      background: url(${speechBubble}) no-repeat center;
      background-size: contain;

      & span {
        font-weight: 600;
      }
    }
  }
`;

const ModalInputWrapper = styled(InputWrapper)`
  display: flex;
  padding-bottom: 10px;
  label.from {
    margin-right: 15px;
  }
  label.to {
    margin-right: 45px;
  }
  input {
    flex: 1;
    margin-bottom: 0;
  }

  textarea {
    width: 100%;
    height: 148px;
    border: 1px solid var(--input-border-color);
    resize: none;
    background-color: #fbfbfb;
    border-radius: 8px;
    padding: 14px 16px 35px 16px;

    font-size: 1rem;
    :focus {
      border: 1px solid var(--point-color);
      outline: none;
      background-color: white;
    }
  }

  .text-length {
    color: var(--black-font-color);
    font-size: 1rem;
    height: 1rem;
    left: auto;
    top: auto;
    right: 16px;
    bottom: 26px;
  }
`;

const RoobitImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CreateRoobitModal = ({ handleOpenModal }) => {
  const [roobitType, setRoobitType] = useState('1');
  const [roobitStyle, setRoobitStyle] = useState('A');
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [nicknameIpt, setNicknameIpt] = useState('');
  const [bodyIpt, setBodyIpt] = useState('');
  const [receptionIpt, setReceptionIpt] = useState('everyone');
  const { roomId } = useParams();

  const roobitTypesArr = useMemo(() => {
    return [
      {
        type: 'roobit',
        number: 1,
        value: '1',
      },
      {
        type: 'roobit',
        number: 2,
        value: '2',
      },
      {
        type: 'roobit',
        number: 3,
        value: '3',
      },
      {
        type: 'roobit',
        number: 4,
        value: '4',
      },
      {
        type: 'roobit',
        number: 5,
        value: '5',
      },
    ];
  }, []);

  /*
  {
    roomId : 2,
    nickname : '자바중독',
    body : '루빗을 140자까지 작성해보아요',
    reception : ‘to everyone’’
    style : 25L
    }
  */
  //const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (data) => axios.post(`${process.env.REACT_APP_API_URL}/roobits/post`, data),
    {
      onMutate: (data) => {
        console.log('onMutate', data);
      },
      onSuccess: (data) => {
        console.log('onSuccess', data);
        // postTodo가 성공하면 roobits로 맵핑된 useQuery api 함수를 실행합니다.
        //queryClient.invalidateQueries('roobits');
        handleOpenModal();
        window.location.reload();
      },
      onError: (err) => {
        alert(
          `루빗 생성에 실패했습니다... \n(서버 에러 또는 룸 당 최대 루빗 개수를 초과)`
        );
        console.log(err);
      },
    }
  );

  const handleOnReset = () => {
    setNicknameIpt('');
    setBodyIpt('');
    setReceptionIpt('everyone');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //쿼리 함수 실행
    mutate({
      roomId: Number(roomId),
      nickname: nicknameIpt,
      body: bodyIpt,
      reception: receptionIpt,
      style: String(roobitType) + roobitStyle,
    });
  };

  const handleNicknameIpt = (e) => {
    if (e.target.value.length <= 10) {
      setNicknameIpt(e.target.value);
    } else alert('10자 이하로 작성해주세요.');
  };

  const handleBodyIpt = (e) => {
    if (e.target.value.length <= 140) {
      setBodyIpt(e.target.value);
    } else alert('140자 이하로 작성해주세요.');
  };

  const handleReceptionIpt = (e) => {
    if (e.target.value.length <= 20) {
      setReceptionIpt(e.target.value);
    } else alert('20자 이하로 작성해주세요.');
  };
  return (
    <>
      {isLoading && <Loading />}
      <CreateRoobitModalStyle
        width="476px"
        onClick={(e) => e.stopPropagation()}
      >
        <CancelIcon
          className="cancel"
          stroke="#aaa"
          onClick={handleOpenModal}
        />
        <h2>Create a Roobit</h2>
        <form onReset={handleOnReset} onSubmit={handleOnSubmit}>
          {isPhaseOne ? (
            <section>
              <Carousel
                cards={roobitTypesArr}
                setData={setRoobitType}
                roobitType={roobitType}
                roobitStyle={roobitStyle}
                width="180px"
                height="180px"
              />
              <RoobitStyleSelect
                setRoobitStyle={setRoobitStyle}
                currentRoobitStyle={roobitStyle}
              />
              <OrangeButton
                height={'45px'}
                width={'100%'}
                onClick={() => setIsPhaseOne(false)}
              >
                글 작성하러 가기
              </OrangeButton>
            </section>
          ) : (
            <section>
              <div className={haveTo(receptionIpt) ? 'letter-msg-parent' : ''}>
                <p className="letter-msg">
                  <span>{`to 설정 시,`} </span>
                  {`\n고양이 디자인이\n 달라져요!`}
                </p>
                <button
                  className="design-btn"
                  onClick={() => setIsPhaseOne(true)}
                >
                  <RoobitImgWrapper
                    className={haveTo(receptionIpt) ? 'letter' : ''}
                  >
                    <RoobitOneImg
                      roobitCode={getRoobitType(roobitType + roobitStyle)}
                      className={haveTo(receptionIpt) ? 'letter' : ''}
                    />
                  </RoobitImgWrapper>
                </button>
              </div>
              <ModalInputWrapper>
                <label htmlFor="from" className="from">
                  from.
                </label>
                <ModalInput
                  id="from"
                  maxLength={10}
                  placeholder="닉네임 (최대 10자)"
                  required
                  value={nicknameIpt}
                  onChange={handleNicknameIpt}
                />
              </ModalInputWrapper>
              <ModalInputWrapper>
                <textarea
                  maxLength={140}
                  placeholder="140자까지 작성 가능합니다."
                  required
                  value={bodyIpt}
                  onChange={handleBodyIpt}
                />
                <p className="text-length">{bodyIpt.length} / 140</p>
              </ModalInputWrapper>
              <ModalInputWrapper>
                <label htmlFor="to" className="to">
                  to.
                </label>
                <ModalInput
                  maxLength={20}
                  id="to"
                  required
                  value={receptionIpt}
                  onChange={handleReceptionIpt}
                />
              </ModalInputWrapper>
              <div className="two-divide">
                <WhiteButton height={'45px'} width={'164px'} type="reset">
                  초기화
                </WhiteButton>
                <OrangeButton height={'45px'} width={'164px'} type="submit">
                  작성 완료
                </OrangeButton>
              </div>
            </section>
          )}
        </form>
      </CreateRoobitModalStyle>
    </>
  );
};

export default CreateRoobitModal;
