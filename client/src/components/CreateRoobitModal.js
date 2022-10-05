import {
  FormWrapper,
  InputWrapper,
  Input,
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

const RoobitImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
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
        alert('성공');
        // postTodo가 성공하면 roobits로 맵핑된 useQuery api 함수를 실행합니다.
        //queryClient.invalidateQueries('roobits');
        location.reload();
        handleOpenModal();
      },
      onError: (err) => {
        alert('실패');
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
      <FormWrapper
        width="476px"
        height="634px"
        onClick={(e) => e.stopPropagation()}
      >
        <CancelIcon stroke="#aaa" onClick={handleOpenModal} />
        <h2>Create a Roobit</h2>
        <form onReset={handleOnReset} onSubmit={handleOnSubmit}>
          {isPhaseOne ? (
            <section>
              <Carousel
                cards={roobitTypesArr}
                setData={setRoobitType}
                roobitType={roobitType}
                roobitStyle={roobitStyle}
              />
              <RoobitStyleSelect setRoobitStyle={setRoobitStyle} />
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
              <button onClick={() => setIsPhaseOne(true)}>
                루빗 디자인 수정
                <RoobitImgWrapper>
                  <RoobitOneImg
                    roobitCode={getRoobitType(roobitType + roobitStyle)}
                    className={haveTo(`to ${receptionIpt}`) ? 'letter' : ''}
                  />
                </RoobitImgWrapper>
              </button>
              <InputWrapper>
                <label htmlFor="from">from.</label>
                <Input
                  id="from"
                  maxLength={10}
                  placeholder="닉네임 (최대 10자)"
                  required
                  value={nicknameIpt}
                  onChange={handleNicknameIpt}
                />
              </InputWrapper>
              <div>
                <textarea
                  maxLength={140}
                  placeholder="140자까지 작성 가능합니다."
                  required
                  value={bodyIpt}
                  onChange={handleBodyIpt}
                />
                <p>{bodyIpt.length} / 140</p>
              </div>
              <InputWrapper>
                <label htmlFor="to">to.</label>
                <Input
                  maxLength={20}
                  id="to"
                  required
                  value={receptionIpt}
                  onChange={handleReceptionIpt}
                />
              </InputWrapper>
              <WhiteButton height={'45px'} width={'164px'} type="reset">
                초기화
              </WhiteButton>
              <OrangeButton height={'45px'} width={'164px'} type="submit">
                작성 완료
              </OrangeButton>
            </section>
          )}
        </form>
      </FormWrapper>
    </>
  );
};

export default CreateRoobitModal;
