import { styled } from 'styled-components';


export const TermWrap = styled.div`
  display: flex;
  width: 640px;
`;

export const Container = styled.div`
  position: relative;
  width: 320px;
`;

export const Box = styled.div`
  position: relative;
`;

export const Title = styled.div`
  margin: 18px 0px;

  color: rgb(252 252 252);
  font-size: 16px;
`;

export const InputBox = styled.input`
  width: 320px;
  height: 46px;

  background-color: rgb(14 14 14);
  border: 1px solid rgb(159 159 159);
  border-radius: 6px;
  color: rgb(230 230 230);
  font-weight: 300;
  text-align: center;
  cursor: text;
  &:hover {
    border: 1px solid rgb(230 230 230);
  }
`;

export const CalendarBtn = styled.div`
  padding-right: 9px;
  position: absolute;
  bottom: -4px;
  right: 14px;
  width: 36px;
  height: 36px;

  border-radius: 50%;
  cursor: pointer;
`;