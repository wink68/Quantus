import { useState } from 'react';
import { AlgoInput, AlgoInputWrap, Option, OptionList, ToggleBtn } from './styled';
import group from '../../../assets/group.svg';

const AllocOptions = [
  { value: 'static_alloc', name: '전략배분 (정적자산배분)' },
  { value: 'dual_momentum', name: '듀얼모멘텀' },
  { value: 'vaa', name: 'VAA' },
  { value: 'daa', name: 'DAA' },
  { value: 'baa_g4', name: 'BAA 공격형' },
  { value: 'baa_g12', name: 'BAA 중도형' },
  { value: 'laa', name: 'LAA' },
  { value: 'haa', name: 'HAA' },
  { value: 'modified_dual_momentum', name: '변형듀모멘텀' },
  { value: 'acc_dual_momentum', name: '가속듀얼모멘텀' },
];

function Algorithm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleInput = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOption = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
  }

  return (
    <>
      <AlgoInputWrap onClick={handleInput}>
        <AlgoInput
          value={selectedOption}
        />
        <ToggleBtn isopen={isOpen}>
          <img src={group} alt='toggle_btn' />
        </ToggleBtn>
        {isOpen && <OptionList>
          {AllocOptions.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOption(option)}
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