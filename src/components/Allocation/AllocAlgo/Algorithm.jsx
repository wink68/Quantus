import { useState } from 'react';
import { AlgoInput, AlgoInputWrap, Option, OptionList, ToggleBtn } from './styled';

const AllocOptions = [
  { value: 1, name: '전략배분 (정적자산배분)' },
  { value: 2, name: '듀얼모멘텀' },
  { value: 3, name: 'VAA' },
  { value: 4, name: 'DAA' },
  { value: 5, name: 'BAA 공격형' },
  { value: 6, name: 'BAA 중도형' },
  { value: 7, name: 'LAA' },
  { value: 8, name: 'HAA' },
  { value: 9, name: '변형듀모멘텀' },
  { value: 10, name: '가속듀얼모멘텀' },
];

function Algorithm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <>
      <AlgoInputWrap onClick={handleToggle}>
        <AlgoInput
          value={selectedOption}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          placeholder={selectedOption}
        />
        <ToggleBtn isopen={isOpen}>
          <img src='group.svg' alt='토글 화살표' />
        </ToggleBtn>
        {isOpen && <OptionList isopen={isOpen}>
          {AllocOptions.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOption(option.name)}
              selected={selectedOption === option.name}
            >
              {option.name}
            </Option>
          ))}
        </OptionList>}
      </AlgoInputWrap>
    </>
  );
}

export default Algorithm;