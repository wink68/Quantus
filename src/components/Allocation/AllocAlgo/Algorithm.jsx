import { useState } from 'react';
import { AlgoInput, AlgoInputWrap, Option, OptionList, ToggleBtn } from './styled';

const AllocOptions = [
  { value: 'option1', name: '전략배분 (정적자산배분)' },
  { value: 'option2', name: '듀얼모멘텀' },
  { value: 'option3', name: 'VAA' },
  { value: 'option4', name: 'DAA' },
  { value: 'option5', name: 'BAA 공격형' },
  { value: 'option6', name: 'BAA 중도형' },
  { value: 'option7', name: 'LAA' },
  { value: 'option8', name: 'HAA' },
  { value: 'option9', name: '변형듀모멘텀' },
  { value: 'option10', name: '가속듀얼모멘텀' },
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
        <ToggleBtn onClick={handleToggle} isopen={isOpen}>
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