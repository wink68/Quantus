import RegularRebalance from '../../../components/Allocation/RegularRebalance/RegularRebalance';
import BandRebalance from '../../../components/Allocation/BandRebalance/BandRebalance';
import AssetGroup from '../../../components/Allocation/AssetGroup/AssetGroup';
import * as S from './styled';

function StaticAlloc() {
  return (
    <>
      <S.Subtitle>주기 리밸런싱</S.Subtitle>
      <RegularRebalance />
      <S.Subtitle>밴드 리밸런싱</S.Subtitle>
      <BandRebalance />
      <AssetGroup />
    </>
  );
}

export default StaticAlloc;