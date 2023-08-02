import Algorithm from './AllocAlgo/Algorithm';
import { AlgoCon, AlgoTitle, Container, Title, Wrapper } from './styled';


function Allocation() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>자산배분 설정</Title>
          <AlgoCon>
            <AlgoTitle>자산배분 알고리즘</AlgoTitle>
            <Algorithm />
          </AlgoCon>
        </Container>
      </Wrapper>
    </>
  );
}

export default Allocation;