import { Subtitle } from './styled';
import RegularRebalance from '../../../components/Allocation/RegularRebalance/RegularRebalance';
import BandRebalance from '../../../components/Allocation/BandRebalance/BandRebalance';
import AssetGroup from '../../../components/Allocation/AssetGroup/AssetGroup';

function StaticAlloc() {
  return (
    <>
      <Subtitle>주기 리밸런싱</Subtitle>
      <RegularRebalance />
      <Subtitle>밴드 리밸런싱</Subtitle>
      <BandRebalance />
      <AssetGroup />
    </>
  );
}

export default StaticAlloc;