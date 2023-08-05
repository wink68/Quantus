import { AssetCon, AssetWrap, CenterCon, CloseBtn, CloseBtnCon, ColumnCon, ContentAssetCon, ContentAssetTitle, ContentCon, Explain, InputCon, KindCon, KindInput, KindTitle, NumTitle, Option, OptionList, PerName, RateCon, RateInput, RateTitle, RateWrap, ToggleBtn, ToggleImg } from './styled';
import close from '../../../assets/close.svg';
import group from '../../../assets/group.svg';
import { useState } from 'react';

const KindOptions = [
  { value: '한국 자산군' },
  { value: '미국 자산군' },
  { value: '전략' },
  { value: '한국 ETF' },
  { value: '미국 ETF' },
  { value: '한국 주식' },
  { value: '미국 주식' },
];

function Asset() {
  // 종류
  const [isKind, setIsKind] = useState(false);
  const [selectedKind, setSelectedKind] = useState('');

  const handleKindInput = () => {
    setIsKind(!isKind);
  }
  const handleKind = (option) => {
    setSelectedKind(option.value);
    setIsKind(false);
  }
  // 자산군

  // 비중
  const [rateValue, setRateValue] = useState(0);

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
    setRateValue('');
  }
  const handleRateBlur = (e) => {
    const newRate = e.target.value;
    if (!newRate || !isNaN(newRate)) {
      setRateValue(0);
    }
  }

  return (
    <AssetWrap>
      <AssetCon>
        <CenterCon>
          <ColumnCon>
            <CloseBtnCon>
              <CloseBtn src={close} />
            </CloseBtnCon>
            <NumTitle>자산 01</NumTitle>
            <ContentCon>
              <KindCon>
                <KindTitle>종류</KindTitle>
                <InputCon onClick={handleKindInput}>
                  <KindInput
                    value={selectedKind}
                  />
                  <ToggleBtn isopen={isKind}>
                    <ToggleImg src={group} alt='kind_toggle_btn' />
                  </ToggleBtn>
                  {isKind && <OptionList>
                    {KindOptions.map((option) => (
                      <Option
                        key={option.value}
                        onClick={() => handleKind(option)}
                        selected={selectedKind === option.value}
                      >
                        {option.value}
                      </Option>
                    ))}
                  </OptionList>}
                </InputCon>
              </KindCon>

              <ContentAssetTitle>자산군</ContentAssetTitle>
              <ContentAssetCon>
                <InputCon>
                  <KindInput />
                  <ToggleBtn>
                    <ToggleImg src={group} alt='asset_toggle_btn' />
                  </ToggleBtn>
                </InputCon>
              </ContentAssetCon>
            </ContentCon>
            
            <RateCon>
              <RateTitle>비중</RateTitle>
              <RateWrap>
                <RateInput
                  type='number'
                  min='0'
                  max='100'
                  value={rateValue}
                  onChange={handleRate}
                  onClick={handleRateClick}
                  onBlur={handleRateBlur}
                />
                <PerName>%</PerName>
              </RateWrap>
              <Explain>0 ~ 100 까지 입력할 수 있습니다.</Explain>
            </RateCon>
          </ColumnCon>
        </CenterCon>
      </AssetCon>
    </AssetWrap>
  );
}

export default Asset;