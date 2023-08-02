import { useState } from 'react';
import { BBIput, BBWrap, Explain, PerName } from './styled';


function BandRebalance() {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('밴드 리밸런싱 기준을 입력해주세요.');

  const handleInput = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    if (e.target.value.startsWith('00')) {
      return;
    }
    setInputValue(e.target.value);
  }

  const handleInputClick = () => {
    setPlaceholder('');
  }
  const handleInputBlur = () => {
    if (!inputValue) {
      setPlaceholder('밴드 리밸런싱 기준을 입력해주세요.');
    }
  }

  return (
    <>
      <BBWrap>
        <BBIput
          type='number'
          min='0'
          value={inputValue}
          onInput={handleInput}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
          placeholder={placeholder}
        ></BBIput>
        <PerName>%</PerName>
      </BBWrap>
      <Explain>0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)</Explain>
    </>
  );
}

export default BandRebalance;