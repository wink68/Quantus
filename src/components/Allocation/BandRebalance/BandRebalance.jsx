import { useState } from 'react';
import { BBIput, BBWrap, Explain, PerName } from './styled';


function BandRebalance() {
  const [rateValue, setRateValue] = useState();
  const [placeholder, setPlaceholder] = useState('밴드 리밸런싱 기준을 입력해주세요.');

  const handleRate = (e) => {
    const newRate = e.target.value;
    if (newRate.startsWith('00')) {
      return;
    }
    if (newRate === '' || (Number(newRate) >= 0 && Number(newRate) <= 100)) {
      setRateValue(newRate);
    }
  }

  const handleRateClick = () => {
    setPlaceholder('');
  }
  const handleRateBlur = (e) => {
    const newRate = e.target.value;
    if (!newRate || !isNaN(newRate)) {
      setPlaceholder('밴드 리밸런싱 기준을 입력해주세요.');
    }
  }

  return (
    <>
      <BBWrap>
        <BBIput
          type='number'
          min='0'
          max='100'
          value={rateValue}
          onChange={handleRate}
          onClick={handleRateClick}
          onBlur={handleRateBlur}
          placeholder={placeholder}
        />
        <PerName>%</PerName>
      </BBWrap>
      <Explain>0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)</Explain>
    </>
  );
}

export default BandRebalance;