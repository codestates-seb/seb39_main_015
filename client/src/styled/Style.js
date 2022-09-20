import styled from 'styled-components';

export const Body = styled.div`
  padding-top: 80px;
  height: 100vh;
  background-color: #fbfbfa;
`;

export const FormWrapper = styled.div`
  background-color: white;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 8px rgba(104, 104, 104, 0.04);
  border-radius: 14px;
`;

export const Input = styled.input`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  background-color: #fbfbfb;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  :focus {
    border: 1px solid #f58a5c;
    outline: none;
  }
`;

export const WhiteButton = styled.button`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  border-radius: 9999px;
  border: none;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: white;
`;

export const OrangeButton = styled(WhiteButton)`
  background-color: #f58a5c;
  color: white;
`;
