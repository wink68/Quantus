import { styled } from 'styled-components';

export const AssetWrap = styled.div`
  padding-left: 64px;
`;

export const AssetCon = styled.div`
  padding-left: 28px;
  padding-bottom: 37.6px;
  width: 368px;
  height: 100%;
  min-height: 200px;
  max-height: 461px;

  background-color: rgb(30, 30, 30);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(252, 252, 252);
  z-index: 0;
`;

export const CenterCon = styled.div`
  display: flex;
  align-items: center;
`;

export const ColumnCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CloseBtnCon = styled.div`
  margin-top: 12px;
  position: relative;
  left: 315px;
  width: 20px;
  cursor: pointer;
`;

export const CloseBtn = styled.img`
  width: 13px;
  cursor: pointer;
  filter: invert(47%) sepia(4%) saturate(8%) hue-rotate(329deg) brightness(100%) contrast(89%);
`;

export const NumTitle = styled.div`
  margin-top: 6px;
  margin-bottom: 18px;

  color: rgb(252, 252, 252);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const ContentCon = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const KindCon = styled.div`
  position: relative;
  width: 312px;
  display: block;
  text-align: start;
`;

export const KindTitle = styled.div`
  margin-top: 0px;
  margin-bottom: 18px;
  color: rgb(252, 252, 252);
  font-size: 16px;
  font-weight: 300;
  z-index: 1;
`;

export const InputCon = styled.div`
  position: relative;
  width: 312px;
`;

export const KindInput = styled.input`
  width: 312px;
  height: 46px;
  text-align: center;
  
  background: rgb(30, 30, 30);
  border: 1px solid rgb(159, 159, 159);
  border-radius: 6px;
  color: rgb(230, 230, 230);
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
`;

export const ToggleBtn = styled.div`
  position: absolute;
  top: -1px;
  right: 0px;
  height: 46px;
  display: flex;
  align-items: center;
  z-index: 2;

  cursor: pointer;
  transform: ${({ isopen }) => (isopen ? 'scaleY(-1)' : 'scaleY(1)')};
  transition: transform 0.2s ease;
`;

export const ToggleImg = styled.img`
  margin-right: 28px;
`;

export const OptionList = styled.div`
  margin-top: 9px;
  width: 100%;
  max-height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  background-color: rgb(30 30 30);
  border: 1px solid rgb(62 62 62);
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden auto;
`;

export const Option = styled.div`
  margin: 0px auto;
  position: relative;
  width: 312px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  color: rgb(230, 230, 230);
  font-size: 16px;
  font-weight: 300;
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

export const ContentAssetTitle = styled.div`
  margin: 38px 0px 0px;
  z-index: 1;
`

export const ContentAssetCon = styled.div`
  margin-top: 28px;
`;

export const RateCon = styled.div`
  display: block;
`;

export const RateTitle = styled.div`
  margin-top: 38px;
  margin-bottom: 18px;
  color: rgb(252 252 252);
  font-size: 16px;
`;

export const RateWrap = styled.div`
  position: relative;
  width: 312px;
`;

export const RateInput = styled.input`
  width: 312px;
  height: 46px;
  
  background: rgb(30 30 30);
  border: 1px solid rgb(159 159 159);
  border-radius: 6px;
  color: rgb(230 230 230);
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  cursor: text;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PerName = styled.div`
  position: absolute;
  bottom: 13px;
  right: 28px;
  color: rgb(230 230 230);
  font-size: 16px;
`;

export const Explain = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;

  font-size: 12px;
  color: rgb(159 159 159);
`;