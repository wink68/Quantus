import { styled } from "styled-components";

export const IPWrap = styled.div`
  position: relative;
  display: flex;
  width: 640px;
`;

export const IPIput = styled.input`
  position: relative;
  width: 640px;
  height: 46px;
  
  background-color: rgb(14 14 14);
  border: 1px solid rgb(159 159 159);
  border-radius: 6px;
  text-align: center;
  text-shadow: none;
  font-size: 16px;
  font-weight: 300;
  color: rgb(252 252 252);
  cursor: pointer;
  &::placeholder {
    color: rgb(252 252 252);
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PName = styled.p`
  position: absolute;
  bottom: 13px;
  right: 20px;
  display: flex;
  align-items: center;

  font-size: 16px;
  color: rgb(230 230 230);
`;