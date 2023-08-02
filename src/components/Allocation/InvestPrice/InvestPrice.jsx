import { useState } from "react";
import { IPIput, IPWrap, PName } from "./styled";


function InvestPrice() {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('초기 투자 금액을 입력해주세요.');

  const handleInput = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    if (e.target.value.startsWith('0')) {
      return;
    }
    setInputValue(e.target.value);
  }

  const handleInputClick = () => {
    setPlaceholder('');
  }
  const handleInputBlur = () => {
    if (!inputValue) {
      setPlaceholder('초기 투자 금액을 입력해주세요.');
    }
  }

  return (
    <>
      <IPWrap>
        <IPIput
          type='number'
          min='1'
          value={inputValue}
          onInput={handleInput}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
          placeholder={placeholder}
        ></IPIput>
      </IPWrap>
      <PName>만원</PName>
    </>
  );
}

export default InvestPrice;