import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #ffc75f;
  height: 100vh;
  padding-top: 5vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 288px;
  color: #232629;
  * {
    box-sizing: border-box;
  }

  > div {
    margin-bottom: 24px;
  }

  button {
    width: 100%;
  }
`;

export const InputForm = styled.div`
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    margin: 2px 0;
    color: #0c0d0e;
    font-size: 15px;
    font-weight: 800;
    display: block;
  }
  input {
    margin: 2px 0;
    border: 1px solid #ccc;
    height: 32px;
    font-size: 13px;
    border-radius: 4px;
    padding: 7.8px 9.1px;

    &:focus {
      border-color: #0e78cc;
      outline: 4px solid #dbefff;
    }
  }

  [type='password'] {
    letter-spacing: 0.2em;
  }

  p {
    color: #d0393e;
    font-size: 12px;
    margin-top: 4px;
    line-height: 1.2;
  }
`;

export const BlueBtn = styled.button`
  height: 38px;
  color: #fff;
  background-color: #0a95ff;
  border: 1px solid #0a95ff;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background: #0e78cc;
  }

  :active {
    background: #0559ad;
    border-color: #0559ad;
    box-shadow: none;
  }
`;

export const ParaLink = styled.div`
  font-size: 13px;
  padding: 16px;
  font-weight: 600;
  p {
    text-align: center;
  }

  a {
    color: #0074cc;
    text-decoration: none;
  }
`;
