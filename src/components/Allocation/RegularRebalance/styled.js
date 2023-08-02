import { styled } from 'styled-components';

export const RBWrap = styled.div`
  position: relative;
  display: flex;
  width: 640px;
`;

export const RBInput = styled.input`
  position: relative;
  width: 640px;
  height: 46px;
  z-index: 1;
  
  background-color: rgb(14 14 14);
  border: 1px solid rgb(159 159 159);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  text-shadow: none;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(230 230 230);
  }
  &::placeholder {
    color: rgb(230 230 230);
  }
`;

export const ToggleBtn = styled.div`
  position: absolute;
  bottom: -1px;
  right: 20px;
  height: 46px;
  display: flex;
  align-items: center;
  z-index: 2;

  cursor: pointer;
  transform: ${({ isopen }) => (isopen ? 'scaleY(-1)' : 'scaleY(1)')};
  transition: transform 0.2s ease;
`;

export const OptionList = styled.div`
  margin-top: 60px;
  width: 100%;
  max-height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  background-color: rgb(14 14 14);
  border: 1px solid rgb(62 62 62);
  border-radius: 6px;
  cursor: pointer;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Option = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  
  color: rgb (230 230 230);
  ${({ selected }) => selected && `
    width: 100%;
    background-color: rgba(236 97 38 / 30%);
    border-radius: 6px;
  `}
  &:hover {
    background-color: rgb(62 62 62);
    border-radius: 6px;
  }
`;