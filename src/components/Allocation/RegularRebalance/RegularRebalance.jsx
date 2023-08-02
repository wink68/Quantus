import { useState } from 'react';
import { Option, OptionList, RBInput, RBWrap, ToggleBtn } from './styled';

const RBOptions = [
  { value: 1, name: '월별' },
  { value: 2, name: '분기별' },
  { value: 3, name: '반기별' },
  { value: 4, name: '매년' },
  { value: 5, name: '하지 않음 (Buy-and-Hold)' },
];

function RegularRebalance() {
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
      <RBWrap onClick={handleToggle}>
        <RBInput
          value={selectedOption}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          placeholder={selectedOption}
        />
        <ToggleBtn isopen={isOpen}>
          <img src='group.svg' alt='토글 화살표' />
        </ToggleBtn>
        {isOpen && <OptionList isopen={isOpen}>
          {RBOptions.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOption(option.name)}
              selected={selectedOption === option.name}
            >
              {option.name}
            </Option>
          ))}
        </OptionList>}
      </RBWrap>
    </>
  );
}

export default RegularRebalance;