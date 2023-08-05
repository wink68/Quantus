import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
`;

export const AssetTitle = styled.p`
  margin: 80px 0px 0px;
  font-size: 18px;
  font-weight: 500;
`;

export const Container = styled.div`
  margin-top: 0px;
  margin-left: -64px;
  display: flex;
  flex-flow: row wrap;
  width: calc(100% + 64px);
`;

export const AssetWrap = styled.div`
  padding-left: 64px;
  padding-top: 38px;
`;

export const AddBox = styled.div`
  width: 368px;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(30 30 30);
  transition: background-color 0.3s ease-in-out 0s;
  border-radius: 12px;
  color: rgba(0 0 0 / 87%);
  &:hover {
    background-color: rgb(62 62 62);
    cursor: pointer;
  }
`;

export const AddBtn = styled.img`
  width: 55px;
  filter: invert(47%) sepia(4%) saturate(8%) hue-rotate(329deg) brightness(100%) contrast(89%);
`;