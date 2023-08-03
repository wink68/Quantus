import { Outlet } from 'react-router-dom';
import Algorithm from './AllocAlgo/Algorithm';
import Btns from './Btns/Btns';
import InvestPrice from './InvestPrice/InvestPrice';
import { AlgoCon, AlgoTitle, Container, Subtitle, TermTitle, Title, Wrapper } from './styled';
import Term from './Term/Term';


function Allocation() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>자산배분 설정</Title>
          <AlgoCon>
            <AlgoTitle>자산배분 알고리즘</AlgoTitle>
            <Algorithm />
            <Subtitle>초기 투자 금액</Subtitle>
            <InvestPrice />
            <Outlet />
            <TermTitle>기간 설정</TermTitle>
            <Term />
          </AlgoCon>
          <Btns />
        </Container>
      </Wrapper>
    </>
  );
}

export default Allocation;