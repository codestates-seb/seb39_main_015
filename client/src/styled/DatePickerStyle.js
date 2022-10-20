import styled from 'styled-components';
import calendarIcon from '../images/calendarIcon.svg';

export const DatePickerWrapper = styled.section`
  .react-datepicker {
    border-color: var(--point-color);
  }
  .react-datepicker__header {
    background-color: var(--point-color);
    border-bottom-color: var(--point-color);
  }
  .react-datepicker__current-month {
    color: var(--white-font-color);
  }
  .react-datepicker__navigation-icon::before {
    border-color: var(--white-font-color);
  }
  .react-datepicker__day-name {
    color: var(--white-font-color);
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: var(--point-color);
  }
  .react-datepicker__day--selected {
    background-color: var(--point-color);
  }
`;

export const DatePickBtnStyle = styled.button`
  background-color: #fbfbfb;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 16px;
  height: 45px;
  width: 100%;
  color: var(--black-font-color);
  background: url(${calendarIcon}) no-repeat 13px center;
  text-align: left;
  padding-left: 39px;
  cursor: pointer;

  :focus {
    border: 1px solid #f58a5c;
    outline: none;
    background-color: white;
  }
`;
