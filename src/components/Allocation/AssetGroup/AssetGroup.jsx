import { AddBox, AddBtn, AssetTitle, AssetWrap, Container, Wrapper } from './styled';
import add from '../../../assets/add.svg';
import Asset from '../Asset/Asset';
import { useState } from 'react';

function AssetGroup() {
  const [assetList, setAssetList] = useState([]);
  const [num, setNum] = useState(0);

  const handleAddAsset = () => {
    setNum((prevNum) => prevNum + 1);
    const newAsset = {
      id: num +1,
    };
    setAssetList((prevList) => [...prevList, newAsset]);
  };

  const handleRemoveAsset = (id) => {
    setAssetList((prevList) => prevList.filter((asset) => asset.id !== id));
    if (num > 0) {
      setNum((prevNum) => prevNum - 1);
    }
  };

  return (
    <>
      <AssetTitle>자산군 추가</AssetTitle>
      <Wrapper>
        <Container>
          {assetList.map((asset) => (
            <Asset key={asset.id} num={asset.id} onRemove={() => handleRemoveAsset(asset.id)} />
          ))}
          <AssetWrap>
            <AddBox onClick={handleAddAsset}>
              <AddBtn src={add} />
            </AddBox>
          </AssetWrap>
        </Container>
      </Wrapper>
    </>
  );
}

export default AssetGroup;