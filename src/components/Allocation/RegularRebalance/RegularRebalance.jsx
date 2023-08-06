import { useState } from 'react';
import group from '../../../assets/group.svg';
import * as S from './styled';

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
      <S.RBWrap onClick={handleToggle}>
        <S.RBInput
          value={selectedOption}
          placeholder={selectedOption}
        />
        <S.ToggleBtn isopen={isOpen}>
          <img src={group} alt='toggle_btn' />
        </S.ToggleBtn>
        {isOpen && <S.OptionList isopen={isOpen}>
          {RBOptions.map((option) => (
            <S.Option
              key={option.value}
              onClick={() => handleOption(option.name)}
              selected={selectedOption === option.name}
            >
              {option.name}
            </S.Option>
          ))}
        </S.OptionList>}
      </S.RBWrap>
    </>
  );
}

export default RegularRebalance;