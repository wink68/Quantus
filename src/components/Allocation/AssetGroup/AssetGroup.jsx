import { AddBox, AddBtn, AssetTitle, AssetWrap, Container, Wrapper } from './styled';
import add from '../../../assets/add.svg';
import Asset from '../Asset/Asset';

function AssetGroup() {

  return (
    <>
      <AssetTitle>자산군 추가</AssetTitle>
      <Wrapper>
        <Container>
          {/* 여기 */}
          <AssetWrap>
            <AddBox>
              <AddBtn src={add} />
            </AddBox>
          </AssetWrap>
        </Container>
      </Wrapper>
    </>
  );
}

export default AssetGroup;