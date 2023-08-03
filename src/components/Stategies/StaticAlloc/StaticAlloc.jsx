import { Subtitle } from './styled';
import RegularRebalance from '../../Allocation/RegularRebalance/RegularRebalance';
import BandRebalance from '../../Allocation/BandRebalance/BandRebalance';

function StaticAlloc() {
  return (
    <>
      <Subtitle>주기 리밸런싱</Subtitle>
      <RegularRebalance />
      <Subtitle>밴드 리밸런싱</Subtitle>
      <BandRebalance />
    </>
  );
}

export default StaticAlloc;