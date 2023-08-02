import Algorithm from './AllocAlgo/Algorithm';
import InvestPrice from './InvestPrice/InvestPrice';
import { AlgoCon, AlgoTitle, Container, Subtitle, Title, Wrapper } from './styled';


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
          </AlgoCon>
        </Container>
      </Wrapper>
    </>
  );
}

export default Allocation;