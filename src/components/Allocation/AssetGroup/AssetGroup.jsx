import { useState } from 'react';
import add from '../../../assets/add.svg';
import * as S from './styled';
import Asset from '../Asset/Asset';

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
      <S.AssetTitle>자산군 추가</S.AssetTitle>
      <S.Wrapper>
        <S.Container>
          {assetList.map((asset) => (
            <Asset key={asset.id} num={asset.id} onRemove={() => handleRemoveAsset(asset.id)} />
          ))}
          <S.AssetWrap>
            <S.AddBox onClick={handleAddAsset}>
              <S.AddBtn src={add} />
            </S.AddBox>
          </S.AssetWrap>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default AssetGroup;