import { Outlet } from 'react-router-dom';
import * as S from './styled';
import Algorithm from './AllocAlgo/Algorithm';
import InvestPrice from './InvestPrice/InvestPrice';
import Term from './Term/Term';
import Btns from './Btns/Btns';


function Allocation() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>자산배분 설정</S.Title>
          <S.AlgoCon>
            <S.AlgoTitle>자산배분 알고리즘</S.AlgoTitle>
            <Algorithm />
            <S.Subtitle>초기 투자 금액</S.Subtitle>
            <InvestPrice />
            <Outlet />
            <S.TermTitle>기간 설정</S.TermTitle>
            <Term />
          </S.AlgoCon>
          <Btns />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Allocation;