import Algorithm from './AllocAlgo/Algorithm';
import BandRebalance from './BandRebalance/BandRebalance';
import Btns from './Btns/Btns';
import InvestPrice from './InvestPrice/InvestPrice';
import RegularRebalance from './RegularRebalance/RegularRebalance';
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
            <Subtitle>주기 리벨런싱</Subtitle>
            <RegularRebalance />
            <Subtitle>밴드 리밸런싱</Subtitle>
            <BandRebalance />
            <TermTitle>기간 설정</TermTitle>
            <Term />
            <Btns />
          </AlgoCon>
        </Container>
      </Wrapper>
    </>
  );
}

export default Allocation;