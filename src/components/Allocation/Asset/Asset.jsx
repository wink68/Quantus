import { useEffect, useState } from 'react';
import close from '../../../assets/close.svg';
import group from '../../../assets/group.svg';
import data from '../../../data/data.json';
import * as S from './styled';

const KindOptions = [
  { value: '한국 자산군' },
  { value: '미국 자산군' },
  { value: '전략' },
  { value: '한국 ETF' },
  { value: '미국 ETF' },
  { value: '한국 주식' },
  { value: '미국 주식' },
];
const groupData = data;

function Asset({ num, onRemove }) {
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
  const [isAsset, setIsAsset] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState('');

  const handleAssetInput = () => {
    setIsAsset(!isAsset);
  }
  const handleAsset = (option) => {
    setSelectedAsset(option['종목명']);
    setIsAsset(false);
  }

  const [getData, setData] = useState([]);
  useEffect(() => {
  const fetchData = () => {
    setData(groupData[selectedKind] || []);
  };
    fetchData();
  }, [selectedKind]);

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
    <S.AssetWrap>
      <S.AssetCon>
        <S.CenterCon>
          <S.ColumnCon>
            <S.CloseBtnCon>
              <S.CloseBtn src={close} onClick={() => onRemove(num)} />
            </S.CloseBtnCon>
            <S.NumTitle>자산 {num.toString().padStart(2, '0')}</S.NumTitle>
            <S.ContentCon>
              <S.KindCon>
                <S.KindTitle>종류</S.KindTitle>
                <S.InputCon onClick={handleKindInput}>
                  <S.KindInput
                    value={selectedKind}
                  />
                  <S.ToggleBtn isopen={isKind}>
                    <S.ToggleImg src={group} alt='kind_toggle_btn' />
                  </S.ToggleBtn>
                  {isKind && <S.OptionList>
                    {KindOptions.map((option) => (
                      <S.Option
                        key={option.value}
                        onClick={() => handleKind(option)}
                        selected={selectedKind === option.value}
                      >
                        {option.value}
                      </S.Option>
                    ))}
                  </S.OptionList>}
                </S.InputCon>
              </S.KindCon>

              <S.ContentAssetTitle>자산군</S.ContentAssetTitle>
              <S.ContentAssetCon>
                <S.InputCon onClick={handleAssetInput}>
                  <S.KindInput
                    value={selectedAsset}
                  />
                  <S.ToggleBtn>
                    <S.ToggleImg src={group} alt='asset_toggle_btn' />
                  </S.ToggleBtn>
                  {isAsset && <S.OptionList>
                    {getData.map((option) => (
                      <S.Option
                        key={option.code}
                        onClick={() => handleAsset(option)}
                        selected={selectedAsset === option['종목명']}
                      >
                        {option['종목명']}
                      </S.Option>
                    ))}
                  </S.OptionList>}
                </S.InputCon>
              </S.ContentAssetCon>
            </S.ContentCon>
            
            <S.RateCon>
              <S.RateTitle>비중</S.RateTitle>
              <S.RateWrap>
                <S.RateInput
                  type='number'
                  min='0'
                  max='100'
                  value={rateValue}
                  onChange={handleRate}
                  onClick={handleRateClick}
                  onBlur={handleRateBlur}
                />
                <S.PerName>%</S.PerName>
              </S.RateWrap>
              <S.Explain>0 ~ 100 까지 입력할 수 있습니다.</S.Explain>
            </S.RateCon>
          </S.ColumnCon>
        </S.CenterCon>
      </S.AssetCon>
    </S.AssetWrap>
  );
}

export default Asset;