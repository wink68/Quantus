import { BtnBox, BtnsWrap, BtnTitle, FirstCon, SecondCon } from "./styled";

function Btns() {
  return (
    <>
      <BtnsWrap>
        <FirstCon>
          <BtnBox>
            <BtnTitle>포트 추출</BtnTitle>
          </BtnBox>
        </FirstCon>
        <SecondCon>
          <BtnBox>
            <BtnTitle>백테스트</BtnTitle>
          </BtnBox>
        </SecondCon>
      </BtnsWrap>
    </>
  );
}

export default Btns;