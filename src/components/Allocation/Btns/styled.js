import { styled } from 'styled-components';

export const BtnsWrap = styled.div`
  margin-top: 110px;
  position: relative;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
`;

export const FirstCon = styled.div`
  position: relative;
`;

export const SecondCon = styled.div`
  margin-left: 64px;
  position: relative;
`;

export const BtnBox = styled.div`
  position: relative;
  width: 210px;
  height: 53px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background: rgb(236 97 38);
  border: 1px solid rgb(236 97 38);
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
`;

export const BtnTitle = styled.div`
  color: rgb(14 14 14);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const LoadingWrap = styled.div`
  margin: 28px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;

  background-color: rgb(14 14 14);
  border-radius: 6px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: rgb(255 255 255);
  text-align: center;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;